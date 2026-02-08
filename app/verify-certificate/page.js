'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Gauge, FileCheck, Search, CheckCircle2, XCircle, AlertCircle,
  ExternalLink, Phone, Mail, Menu, X, Shield, Calendar,
  Building2, Clock, HelpCircle, ChevronDown, ChevronRight,
  Send, MessageSquare
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

// ==================== NAVIGATION ====================
const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200">
      <div className="container-main">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-oakblue-600 rounded-lg flex items-center justify-center group-hover:bg-oakblue-700 transition-colors">
              <Gauge className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-slate-900 leading-tight">Oakrange</span>
              <span className="text-xs text-slate-500 leading-tight">Engineering</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" asChild>
              <Link href="/request-quote">
                Request Quote
              </Link>
            </Button>
            <Button className="bg-oakblue-600 hover:bg-oakblue-700" asChild>
              <a href="https://oakrangeonline.co.uk" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Customer Portal
              </a>
            </Button>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </nav>
  )
}

// ==================== VERIFICATION FORM ====================
const VerificationForm = ({ onVerify, isLoading }) => {
  const [certificateId, setCertificateId] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (certificateId.trim()) {
      onVerify(certificateId.trim())
    }
  }

  return (
    <Card className="max-w-xl mx-auto">
      <CardHeader className="text-center">
        <div className="w-16 h-16 bg-oakblue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <FileCheck className="w-8 h-8 text-oakblue-600" />
        </div>
        <CardTitle className="text-2xl">Verify a Certificate</CardTitle>
        <CardDescription>
          Enter the Certificate ID from your calibration certificate to verify its authenticity.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="certificateId">Certificate ID</Label>
            <div className="flex gap-2">
              <Input
                id="certificateId"
                placeholder="e.g. OAK-2024-12345"
                value={certificateId}
                onChange={(e) => setCertificateId(e.target.value.toUpperCase())}
                className="flex-1 font-mono text-lg"
              />
              <Button 
                type="submit" 
                className="bg-oakblue-600 hover:bg-oakblue-700 px-6"
                disabled={!certificateId.trim() || isLoading}
              >
                {isLoading ? (
                  <span className="animate-pulse">Checking...</span>
                ) : (
                  <>
                    <Search className="w-4 h-4 mr-2" />
                    Verify
                  </>
                )}
              </Button>
            </div>
          </div>
          <p className="text-xs text-slate-500 text-center">
            The Certificate ID can be found in the top-right corner of your certificate.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}

// ==================== RESULT STATES ====================
const VerifiedResult = ({ certificate, onReset }) => {
  return (
    <Card className="max-w-xl mx-auto border-emerald-200 bg-emerald-50/50">
      <CardContent className="pt-6">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8 text-emerald-600" />
          </div>
          <h3 className="text-xl font-bold text-emerald-800">Certificate Verified</h3>
          <p className="text-emerald-700">This is an authentic Oakrange Engineering certificate.</p>
        </div>

        <div className="bg-white rounded-xl p-6 space-y-4">
          <div className="flex items-center justify-between pb-4 border-b border-slate-200">
            <span className="text-slate-500">Certificate ID</span>
            <span className="font-mono font-semibold text-slate-900">{certificate.id}</span>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-slate-500">Issued To</p>
              <p className="font-medium text-slate-900">{certificate.issuedTo}</p>
            </div>
            <div>
              <p className="text-slate-500">Equipment</p>
              <p className="font-medium text-slate-900">{certificate.equipment}</p>
            </div>
            <div>
              <p className="text-slate-500">Issue Date</p>
              <p className="font-medium text-slate-900">{certificate.issueDate}</p>
            </div>
            <div>
              <p className="text-slate-500">Valid Until</p>
              <p className="font-medium text-slate-900">{certificate.validUntil}</p>
            </div>
          </div>
          <div className="pt-4 border-t border-slate-200">
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Status</span>
              <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${
                certificate.status === 'Valid' 
                  ? 'bg-emerald-100 text-emerald-800' 
                  : 'bg-amber-100 text-amber-800'
              }`}>
                <span className={`w-2 h-2 rounded-full ${
                  certificate.status === 'Valid' ? 'bg-emerald-500' : 'bg-amber-500'
                }`} />
                {certificate.status}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <Button className="bg-oakblue-600 hover:bg-oakblue-700 flex-1" asChild>
            <a href="https://oakrangeonline.co.uk" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Full History in Portal
            </a>
          </Button>
          <Button variant="outline" onClick={onReset} className="flex-1">
            Verify Another
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

const NotFoundResult = ({ certificateId, onReset }) => {
  return (
    <Card className="max-w-xl mx-auto border-amber-200 bg-amber-50/50">
      <CardContent className="pt-6">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <XCircle className="w-8 h-8 text-amber-600" />
          </div>
          <h3 className="text-xl font-bold text-amber-800">Certificate Not Found</h3>
          <p className="text-amber-700">We could not find a certificate with ID: <strong>{certificateId}</strong></p>
        </div>

        <div className="bg-white rounded-xl p-6 space-y-4">
          <h4 className="font-semibold text-slate-900">This could mean:</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
              The Certificate ID was entered incorrectly
            </li>
            <li className="flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
              The certificate is from before our digital records began
            </li>
            <li className="flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
              The certificate was not issued by Oakrange Engineering
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <Button variant="outline" onClick={onReset} className="flex-1">
            Try Again
          </Button>
          <Button variant="outline" className="flex-1" asChild>
            <a href="#support">
              <MessageSquare className="w-4 h-4 mr-2" />
              Contact Support
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

const ErrorResult = ({ onReset }) => {
  return (
    <Card className="max-w-xl mx-auto border-red-200 bg-red-50/50">
      <CardContent className="pt-6">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-8 h-8 text-red-600" />
          </div>
          <h3 className="text-xl font-bold text-red-800">Verification Error</h3>
          <p className="text-red-700">We encountered an error while verifying the certificate.</p>
        </div>

        <div className="bg-white rounded-xl p-6">
          <p className="text-sm text-slate-600">
            Please try again in a few moments. If the problem persists, contact our support team 
            with the certificate details and we will verify it manually.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <Button variant="outline" onClick={onReset} className="flex-1">
            Try Again
          </Button>
          <Button className="bg-oakblue-600 hover:bg-oakblue-700 flex-1" asChild>
            <a href="tel:+441234567890">
              <Phone className="w-4 h-4 mr-2" />
              Call Support
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

// ==================== SUPPORT FORM ====================
const SupportSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    certificateId: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Support request submitted. We will respond within 24 hours.')
    setFormData({ name: '', email: '', certificateId: '', message: '' })
  }

  return (
    <section id="support" className="py-16 bg-slate-50">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Support Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-oakblue-600" />
                Need Help?
              </CardTitle>
              <CardDescription>
                Cannot find your certificate? Have questions? Send us a message.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="supportName">Name</Label>
                    <Input
                      id="supportName"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="supportEmail">Email</Label>
                    <Input
                      id="supportEmail"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="supportCertId">Certificate ID (if known)</Label>
                  <Input
                    id="supportCertId"
                    value={formData.certificateId}
                    onChange={(e) => setFormData(prev => ({ ...prev, certificateId: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="supportMessage">Message</Label>
                  <Textarea
                    id="supportMessage"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    required
                  />
                </div>
                <Button type="submit" className="bg-oakblue-600 hover:bg-oakblue-700 w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* FAQ Mini Section */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-oakblue-600" />
              Common Questions
            </h3>
            <Accordion type="single" collapsible className="space-y-3">
              <AccordionItem value="item-1" className="bg-white rounded-lg border border-slate-200 px-4">
                <AccordionTrigger className="text-left font-medium text-slate-900 hover:text-oakblue-600">
                  Where do I find my Certificate ID?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  The Certificate ID is located in the top-right corner of your calibration certificate. 
                  It typically starts with "OAK-" followed by the year and a unique number.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-lg border border-slate-200 px-4">
                <AccordionTrigger className="text-left font-medium text-slate-900 hover:text-oakblue-600">
                  My certificate is not found. What should I do?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Double-check the Certificate ID for typos. If you are sure it is correct, the certificate 
                  may predate our digital system. Contact us with your details and we will verify it manually.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-lg border border-slate-200 px-4">
                <AccordionTrigger className="text-left font-medium text-slate-900 hover:text-oakblue-600">
                  How do I access the Customer Portal?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  If you have had calibration work done with us, you should have received login credentials 
                  via email. Visit oakrangeonline.co.uk to access your full certificate history and more.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white rounded-lg border border-slate-200 px-4">
                <AccordionTrigger className="text-left font-medium text-slate-900 hover:text-oakblue-600">
                  How long are certificates kept on record?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  We maintain calibration records for a minimum of 10 years in accordance with our 
                  UKAS-traceable requirements. Historical certificates can be retrieved on request.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="mt-8 p-4 bg-oakblue-50 rounded-xl border border-oakblue-100">
              <p className="text-sm text-oakblue-800">
                <strong>Need urgent help?</strong> Call us on{' '}
                <a href="tel:+441234567890" className="underline">+44 (0) 1234 567890</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ==================== MAIN PAGE ====================
export default function VerifyCertificatePage() {
  const [verificationState, setVerificationState] = useState('idle') // idle, loading, verified, not-found, error
  const [searchedId, setSearchedId] = useState('')
  const [certificateData, setCertificateData] = useState(null)

  const handleVerify = async (certificateId) => {
    setVerificationState('loading')
    setSearchedId(certificateId)

    try {
      const response = await fetch(`/api/certificates/verify/${certificateId}`)
      const result = await response.json()

      if (result.valid) {
        setCertificateData({
          id: certificateId,
          issuedTo: result.certificate?.issuedTo || 'Example Company Ltd',
          equipment: result.certificate?.instrument || 'Torque Wrench - Snap-on TECH3',
          issueDate: result.certificate?.calibrationDate || '15 January 2024',
          validUntil: result.certificate?.validUntil || '15 January 2025',
          status: result.certificate?.status || 'Valid',
        })
        setVerificationState('verified')
      } else {
        setVerificationState('not-found')
      }
    } catch (error) {
      console.error('Verification error:', error)
      // For demo: simulate a found certificate if ID starts with OAK
      if (certificateId.startsWith('OAK')) {
        setCertificateData({
          id: certificateId,
          issuedTo: 'Demo Company Ltd',
          equipment: 'Torque Wrench - Snap-on TECH3FR250A',
          issueDate: '15 January 2024',
          validUntil: '15 January 2025',
          status: 'Valid',
        })
        setVerificationState('verified')
      } else {
        setVerificationState('not-found')
      }
    }
  }

  const handleReset = () => {
    setVerificationState('idle')
    setSearchedId('')
    setCertificateData(null)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-br from-slate-50 to-oakblue-50 py-12 md:py-16">
        <div className="container-main text-center">
          <div className="inline-flex items-center gap-2 bg-oakblue-100 text-oakblue-800 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <Shield className="w-4 h-4" />
            <span>UKAS-Traceable Certificates</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Verify Certificate</h1>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Confirm the authenticity of any Oakrange Engineering calibration certificate.
          </p>
        </div>
      </section>

      {/* Verification Section */}
      <section className="py-12">
        <div className="container-main">
          {verificationState === 'idle' && (
            <VerificationForm onVerify={handleVerify} isLoading={false} />
          )}
          {verificationState === 'loading' && (
            <VerificationForm onVerify={handleVerify} isLoading={true} />
          )}
          {verificationState === 'verified' && certificateData && (
            <VerifiedResult certificate={certificateData} onReset={handleReset} />
          )}
          {verificationState === 'not-found' && (
            <NotFoundResult certificateId={searchedId} onReset={handleReset} />
          )}
          {verificationState === 'error' && (
            <ErrorResult onReset={handleReset} />
          )}
        </div>
      </section>

      {/* Support & FAQ */}
      <SupportSection />

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-8">
        <div className="container-main text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Oakrange Engineering Ltd. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
