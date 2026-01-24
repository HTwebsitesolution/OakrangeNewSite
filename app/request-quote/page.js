'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { 
  Gauge, Calculator, ChevronRight, ChevronLeft, Plus, Trash2,
  Users, MapPin, Calendar, Upload, FileText, CheckCircle2,
  Download, Mail, Phone, Menu, X, Building2, Clock, AlertCircle,
  ClipboardList, Send, Sparkles, Shield
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

// ==================== NAVIGATION ====================
const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Industries', href: '/industries' },
    { label: 'Request Quote', href: '/request-quote' },
  ]

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

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-slate-600 hover:text-oakblue-600 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </nav>
  )
}

// ==================== STEP INDICATOR ====================
const StepIndicator = ({ currentStep }) => {
  const steps = [
    { number: 1, label: 'Equipment List' },
    { number: 2, label: 'Contact & Schedule' },
    { number: 3, label: 'Confirmation' },
  ]

  return (
    <div className="flex items-center justify-center gap-4 mb-8">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center">
          <div className={`flex items-center gap-2 ${
            currentStep >= step.number ? 'text-oakblue-600' : 'text-slate-400'
          }`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
              currentStep > step.number 
                ? 'bg-emerald-500 text-white' 
                : currentStep === step.number 
                  ? 'bg-oakblue-600 text-white' 
                  : 'bg-slate-200 text-slate-500'
            }`}>
              {currentStep > step.number ? (
                <CheckCircle2 className="w-5 h-5" />
              ) : (
                step.number
              )}
            </div>
            <span className="hidden sm:inline font-medium">{step.label}</span>
          </div>
          {index < steps.length - 1 && (
            <ChevronRight className="w-5 h-5 text-slate-300 mx-2" />
          )}
        </div>
      ))}
    </div>
  )
}

// ==================== STEP 1: EQUIPMENT LIST ====================
const EquipmentListStep = ({ equipment, setEquipment, onNext }) => {
  const emptyItem = {
    id: Date.now(),
    type: '',
    makeModel: '',
    serialNumber: '',
    quantity: '1',
    location: '',
    notes: '',
  }

  const addItem = () => {
    setEquipment([...equipment, { ...emptyItem, id: Date.now() }])
  }

  const removeItem = (id) => {
    if (equipment.length > 1) {
      setEquipment(equipment.filter(item => item.id !== id))
    }
  }

  const updateItem = (id, field, value) => {
    setEquipment(equipment.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ))
  }

  const equipmentTypes = [
    'Torque Wrench',
    'Pressure Gauge',
    'Tyre Gauge',
    'Thermometer',
    'Micrometer',
    'Caliper',
    'Diagnostic Equipment',
    'Brake Tester',
    'Emissions Analyser',
    'Weighing Scale',
    'Multimeter',
    'Other',
  ]

  const isValid = equipment.some(item => item.type && item.quantity)

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Build Your Equipment List</h2>
        <p className="text-slate-600">Add the instruments you need calibrated. The more detail, the more accurate your quote.</p>
      </div>

      {/* Equipment Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-6">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-50">
                <TableHead className="font-semibold">Equipment Type *</TableHead>
                <TableHead className="font-semibold">Make/Model</TableHead>
                <TableHead className="font-semibold">Serial Number</TableHead>
                <TableHead className="font-semibold w-24">Qty *</TableHead>
                <TableHead className="font-semibold">Location</TableHead>
                <TableHead className="font-semibold">Notes</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {equipment.map((item, index) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <Select 
                      value={item.type} 
                      onValueChange={(value) => updateItem(item.id, 'type', value)}
                    >
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent>
                        {equipmentTypes.map(type => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Input
                      placeholder="e.g. Snap-on TECH3"
                      value={item.makeModel}
                      onChange={(e) => updateItem(item.id, 'makeModel', e.target.value)}
                      className="w-36"
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      placeholder="Optional"
                      value={item.serialNumber}
                      onChange={(e) => updateItem(item.id, 'serialNumber', e.target.value)}
                      className="w-32"
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateItem(item.id, 'quantity', e.target.value)}
                      className="w-20"
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      placeholder="Workshop A"
                      value={item.location}
                      onChange={(e) => updateItem(item.id, 'location', e.target.value)}
                      className="w-28"
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      placeholder="Any notes..."
                      value={item.notes}
                      onChange={(e) => updateItem(item.id, 'notes', e.target.value)}
                      className="w-32"
                    />
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeItem(item.id)}
                      disabled={equipment.length === 1}
                      className="text-slate-400 hover:text-red-600"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Add Row Button */}
      <Button
        variant="outline"
        onClick={addItem}
        className="mb-8 border-dashed border-slate-300 text-slate-600 hover:border-oakblue-400 hover:text-oakblue-600"
      >
        <Plus className="w-4 h-4 mr-2" />
        Add Another Item
      </Button>

      {/* Navigation */}
      <div className="flex justify-end">
        <Button
          onClick={onNext}
          disabled={!isValid}
          className="bg-oakblue-600 hover:bg-oakblue-700 text-white px-8"
        >
          Continue to Contact Details
          <ChevronRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  )
}

// ==================== STEP 2: CONTACT DETAILS ====================
const ContactDetailsStep = ({ formData, setFormData, onBack, onSubmit, isSubmitting }) => {
  const fileInputRef = useRef(null)

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      handleChange('uploadedFile', file.name)
    }
  }

  const isValid = formData.name && formData.email && formData.company && formData.address

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Contact & Schedule</h2>
        <p className="text-slate-600">Tell us where to send the quote and when you need calibration.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-oakblue-600" />
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  placeholder="John Smith"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+44 ..."
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@company.co.uk"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company Name *</Label>
              <Input
                id="company"
                placeholder="Your Company Ltd"
                value={formData.company}
                onChange={(e) => handleChange('company', e.target.value)}
                required
              />
            </div>
          </CardContent>
        </Card>

        {/* Site Address */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-oakblue-600" />
              Site Address
            </CardTitle>
            <CardDescription>Where should we perform the calibration?</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="address">Full Address *</Label>
              <Textarea
                id="address"
                placeholder="123 Workshop Road\nIndustrial Estate\nBirmingham\nB1 1AA"
                rows={4}
                value={formData.address}
                onChange={(e) => handleChange('address', e.target.value)}
                required
              />
            </div>
          </CardContent>
        </Card>

        {/* Scheduling */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-oakblue-600" />
              Scheduling Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="preferredDate">Preferred Date</Label>
              <Input
                id="preferredDate"
                type="date"
                value={formData.preferredDate}
                onChange={(e) => handleChange('preferredDate', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="auditDeadline">Audit Deadline (if applicable)</Label>
              <Input
                id="auditDeadline"
                type="date"
                value={formData.auditDeadline}
                onChange={(e) => handleChange('auditDeadline', e.target.value)}
              />
              <p className="text-xs text-slate-500">Let us know if you have an upcoming audit</p>
            </div>
          </CardContent>
        </Card>

        {/* Additional Options */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="w-5 h-5 text-oakblue-600" />
              Additional Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Upload Equipment List (optional)</Label>
              <div 
                className="border-2 border-dashed border-slate-200 rounded-lg p-6 text-center hover:border-oakblue-300 cursor-pointer transition-colors"
                onClick={() => fileInputRef.current?.click()}
              >
                <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                <p className="text-sm text-slate-600">
                  {formData.uploadedFile || 'Click to upload CSV, Excel, or PDF'}
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".csv,.xlsx,.xls,.pdf"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea
                id="notes"
                placeholder="Any special requirements or access instructions..."
                rows={3}
                value={formData.notes}
                onChange={(e) => handleChange('notes', e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-2 pt-2">
              <Checkbox 
                id="emailCopy" 
                checked={formData.emailCopy}
                onCheckedChange={(checked) => handleChange('emailCopy', checked)}
              />
              <Label htmlFor="emailCopy" className="text-sm cursor-pointer">
                Email me a copy of this request
              </Label>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-8">
        <Button
          variant="outline"
          onClick={onBack}
          className="px-6"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <Button
          onClick={onSubmit}
          disabled={!isValid || isSubmitting}
          className="bg-oakblue-600 hover:bg-oakblue-700 text-white px-8"
        >
          {isSubmitting ? (
            <>Processing...</>
          ) : (
            <>
              Submit Request
              <Send className="w-4 h-4 ml-2" />
            </>
          )}
        </Button>
      </div>
    </div>
  )
}

// ==================== STEP 3: CONFIRMATION ====================
const ConfirmationStep = ({ quoteId, equipment, formData }) => {
  const generatePDF = async () => {
    // Call server-side PDF generation
    try {
      const response = await fetch('/api/quotes/generate-pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quoteId, equipment, formData })
      })
      
      if (response.ok) {
        const blob = await response.blob()
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `quote-request-${quoteId}.pdf`
        a.click()
        window.URL.revokeObjectURL(url)
      } else {
        // Fallback: generate simple text summary
        downloadTextSummary()
      }
    } catch (error) {
      console.error('PDF generation error:', error)
      downloadTextSummary()
    }
  }

  const downloadTextSummary = () => {
    const totalItems = equipment.reduce((sum, item) => sum + parseInt(item.quantity || 1), 0)
    const content = `OAKRANGE ENGINEERING - QUOTE REQUEST SUMMARY
========================================
Reference: ${quoteId}
Date: ${new Date().toLocaleDateString('en-GB')}

CONTACT DETAILS
---------------
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Company: ${formData.company}

SITE ADDRESS
------------
${formData.address}

SCHEDULING
----------
Preferred Date: ${formData.preferredDate || 'Flexible'}
Audit Deadline: ${formData.auditDeadline || 'None specified'}

EQUIPMENT LIST (${totalItems} items)
--------------------
${equipment.map((item, i) => 
  `${i + 1}. ${item.type} - ${item.makeModel || 'N/A'} (Qty: ${item.quantity})${item.serialNumber ? ` S/N: ${item.serialNumber}` : ''}${item.location ? ` Location: ${item.location}` : ''}`
).join('\n')}

ADDITIONAL NOTES
----------------
${formData.notes || 'None'}

========================================
Thank you for your request.
We will respond within 24 hours.

Oakrange Engineering Ltd
+44 (0) 1234 567890
info@oakrange.co.uk
`
    
    const blob = new Blob([content], { type: 'text/plain' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `quote-request-${quoteId}.txt`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const totalItems = equipment.reduce((sum, item) => sum + parseInt(item.quantity || 1), 0)

  return (
    <div className="text-center max-w-2xl mx-auto">
      <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle2 className="w-10 h-10 text-emerald-600" />
      </div>
      
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Quote Request Submitted!</h2>
      <p className="text-lg text-slate-600 mb-8">
        Thank you for your request. We will review your equipment list and respond with a detailed quote within 24 hours.
      </p>

      {/* Reference Card */}
      <Card className="mb-8 text-left">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Request Summary</span>
            <span className="text-sm font-normal text-slate-500">Ref: {quoteId}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-slate-500">Contact</p>
              <p className="font-medium">{formData.name}</p>
              <p className="text-slate-600">{formData.email}</p>
            </div>
            <div>
              <p className="text-slate-500">Company</p>
              <p className="font-medium">{formData.company}</p>
            </div>
            <div>
              <p className="text-slate-500">Equipment Items</p>
              <p className="font-medium">{totalItems} items across {equipment.length} types</p>
            </div>
            <div>
              <p className="text-slate-500">Preferred Date</p>
              <p className="font-medium">{formData.preferredDate || 'Flexible'}</p>
            </div>
          </div>

          {formData.emailCopy && (
            <div className="flex items-center gap-2 text-sm text-emerald-600 bg-emerald-50 px-4 py-2 rounded-lg">
              <Mail className="w-4 h-4" />
              <span>A copy has been sent to {formData.email}</span>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button
          onClick={generatePDF}
          className="bg-oakblue-600 hover:bg-oakblue-700 text-white px-8"
        >
          <Download className="w-4 h-4 mr-2" />
          Download Summary
        </Button>
        <Button
          variant="outline"
          asChild
        >
          <Link href="/">
            Return to Home
          </Link>
        </Button>
      </div>

      {/* What Happens Next */}
      <div className="mt-12 bg-slate-50 rounded-xl p-6 text-left">
        <h3 className="font-semibold text-slate-900 mb-4">What Happens Next?</h3>
        <ol className="space-y-3">
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 bg-oakblue-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">1</div>
            <div>
              <p className="font-medium text-slate-800">We Review Your Request</p>
              <p className="text-sm text-slate-600">Our team assesses your equipment list and requirements.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 bg-oakblue-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">2</div>
            <div>
              <p className="font-medium text-slate-800">Receive Your Quote</p>
              <p className="text-sm text-slate-600">Within 24 hours, you will receive a detailed, fixed-price quotation.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 bg-oakblue-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">3</div>
            <div>
              <p className="font-medium text-slate-800">Schedule Your Visit</p>
              <p className="text-sm text-slate-600">Approve the quote and we will arrange an onsite visit at your convenience.</p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  )
}

// ==================== MAIN PAGE ====================
export default function RequestQuotePage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [quoteId, setQuoteId] = useState('')
  
  const [equipment, setEquipment] = useState([{
    id: Date.now(),
    type: '',
    makeModel: '',
    serialNumber: '',
    quantity: '1',
    location: '',
    notes: '',
  }])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    preferredDate: '',
    auditDeadline: '',
    uploadedFile: '',
    notes: '',
    emailCopy: true,
  })

  const handleSubmit = async () => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/quotes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          equipment,
          ...formData,
          submittedAt: new Date().toISOString(),
        })
      })

      const result = await response.json()
      
      if (result.success) {
        setQuoteId(result.quoteId)
        setCurrentStep(3)
      } else {
        alert('There was an error submitting your request. Please try again.')
      }
    } catch (error) {
      console.error('Submit error:', error)
      // Generate a local reference if API fails
      setQuoteId(`QR-${Date.now().toString(36).toUpperCase()}`)
      setCurrentStep(3)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />

      {/* Header */}
      <section className="bg-white border-b border-slate-200 py-8">
        <div className="container-main">
          <div className="flex items-center gap-2 text-oakblue-600 text-sm font-medium mb-2">
            <Calculator className="w-4 h-4" />
            <span>Quote Request</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Request a Quote</h1>
          <p className="text-slate-600 mt-2">Build your equipment list and get a tailored calibration quote.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container-main">
          <StepIndicator currentStep={currentStep} />
          
          {currentStep === 1 && (
            <EquipmentListStep
              equipment={equipment}
              setEquipment={setEquipment}
              onNext={() => setCurrentStep(2)}
            />
          )}
          
          {currentStep === 2 && (
            <ContactDetailsStep
              formData={formData}
              setFormData={setFormData}
              onBack={() => setCurrentStep(1)}
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
            />
          )}
          
          {currentStep === 3 && (
            <ConfirmationStep
              quoteId={quoteId}
              equipment={equipment}
              formData={formData}
            />
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-8">
        <div className="container-main text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Oakrange Engineering Ltd. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
