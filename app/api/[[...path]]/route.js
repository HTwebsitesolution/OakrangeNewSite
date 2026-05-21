import { NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'
import { v4 as uuidv4 } from 'uuid'

const mongoUrl = process.env.MONGO_URL
let client = null
let db = null

async function connectDB() {
  if (db) return db
  try {
    client = new MongoClient(mongoUrl)
    await client.connect()
    db = client.db('oakrange_engineering')
    console.log('Connected to MongoDB')
    return db
  } catch (error) {
    console.error('MongoDB connection error:', error)
    throw error
  }
}

// Health check endpoint
async function handleHealthCheck() {
  try {
    const database = await connectDB()
    return NextResponse.json({ 
      status: 'healthy', 
      timestamp: new Date().toISOString(),
      database: 'connected'
    })
  } catch (error) {
    return NextResponse.json({ 
      status: 'unhealthy', 
      error: error.message 
    }, { status: 500 })
  }
}

// Quote request endpoints
async function handleQuoteRequest(request) {
  try {
    const database = await connectDB()
    const body = await request.json()
    
    const quoteRequest = {
      id: uuidv4(),
      ...body,
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    
    await database.collection('quote_requests').insertOne(quoteRequest)
    
    return NextResponse.json({ 
      success: true, 
      message: 'Quote request submitted successfully',
      quoteId: quoteRequest.id
    }, { status: 201 })
  } catch (error) {
    console.error('Error creating quote request:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to submit quote request' 
    }, { status: 500 })
  }
}

async function getQuoteRequests() {
  try {
    const database = await connectDB()
    const quotes = await database.collection('quote_requests')
      .find({})
      .sort({ createdAt: -1 })
      .toArray()
    
    return NextResponse.json({ success: true, data: quotes })
  } catch (error) {
    console.error('Error fetching quote requests:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to fetch quote requests' 
    }, { status: 500 })
  }
}

// Certificate verification endpoint
async function verifyCertificate(certificateId) {
  try {
    const database = await connectDB()
    const certificate = await database.collection('certificates').findOne({ 
      certificateId: certificateId 
    })
    
    if (!certificate) {
      return NextResponse.json({ 
        valid: false, 
        message: 'Certificate not found' 
      }, { status: 404 })
    }
    
    return NextResponse.json({ 
      valid: true, 
      certificate: {
        id: certificate.certificateId,
        issuedTo: certificate.issuedTo,
        instrument: certificate.instrument,
        calibrationDate: certificate.calibrationDate,
        validUntil: certificate.validUntil,
        status: certificate.status
      }
    })
  } catch (error) {
    console.error('Error verifying certificate:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to verify certificate' 
    }, { status: 500 })
  }
}

function buildQuoteSummaryText({ quoteId, equipment = [], formData = {} }) {
  const totalItems = equipment.reduce((sum, item) => sum + parseInt(item.quantity || 1, 10), 0)
  const equipmentLines = equipment.length
    ? equipment
        .map(
          (item, i) =>
            `${i + 1}. ${item.type} - ${item.makeModel || 'N/A'} (Qty: ${item.quantity})${
              item.serialNumber ? ` S/N: ${item.serialNumber}` : ''
            }${item.location ? ` Location: ${item.location}` : ''}`
        )
        .join('\n')
    : 'See online quote request for details.'

  return `OAKRANGE ENGINEERING - QUOTE REQUEST SUMMARY
========================================
Reference: ${quoteId}
Date: ${new Date().toLocaleDateString('en-GB')}

CONTACT DETAILS
---------------
Name: ${formData.name || ''}
Email: ${formData.email || ''}
Phone: ${formData.phone || 'Not provided'}
Company: ${formData.company || ''}

SITE ADDRESS
------------
${formData.address || 'Not provided'}

SCHEDULING
----------
Preferred Date: ${formData.preferredDate || 'Flexible'}
Audit Deadline: ${formData.auditDeadline || 'None specified'}

EQUIPMENT LIST (${totalItems} items)
--------------------
${equipmentLines}

ADDITIONAL NOTES
----------------
${formData.notes || 'None'}

========================================
Thank you for your request.
We will respond within 24 hours.

Oakrange Engineering Ltd
01709 542334
info@oakrange.co.uk
`
}

async function handleGeneratePdf(request) {
  try {
    const body = await request.json()
    const { quoteId, equipment = [], formData = {} } = body
    const text = buildQuoteSummaryText({ quoteId, equipment, formData })
    const filename = `quote-request-${quoteId || 'summary'}.txt`

    return new NextResponse(text, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Content-Disposition': `attachment; filename="${filename}"`,
      },
    })
  } catch (error) {
    console.error('PDF/summary generation error:', error)
    return NextResponse.json({ success: false, error: 'Failed to generate summary' }, { status: 500 })
  }
}

// Route handler
export async function GET(request, { params }) {
  const path = params?.path || []
  const pathString = path.join('/')
  
  // API routes
  if (pathString === 'health') {
    return handleHealthCheck()
  }
  
  if (pathString === 'quotes') {
    return getQuoteRequests()
  }
  
  if (pathString.startsWith('certificates/verify/')) {
    const certificateId = pathString.split('/').pop()
    return verifyCertificate(certificateId)
  }
  
  return NextResponse.json({ 
    message: 'Oakrange Engineering API',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      quotes: '/api/quotes',
      verifyCertificate: '/api/certificates/verify/:id'
    }
  })
}

export async function POST(request, { params }) {
  const path = params?.path || []
  const pathString = path.join('/')
  
  if (pathString === 'quotes') {
    return handleQuoteRequest(request)
  }

  if (pathString === 'quotes/generate-pdf') {
    return handleGeneratePdf(request)
  }
  
  return NextResponse.json({ 
    error: 'Not found' 
  }, { status: 404 })
}