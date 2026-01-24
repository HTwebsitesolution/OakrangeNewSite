'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Gauge, Zap, ExternalLink, CheckCircle2, Users, Building2,
  Shield, ArrowRight, Phone, Mail, Menu, X, Calculator,
  Plug, ClipboardCheck, AlertTriangle, Clock, FileCheck
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'

// ==================== NAVIGATION ====================
const Navigation = ({ onQuoteClick }) => {
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
              <Link href="/services">
                All Services
              </Link>
            </Button>
            <Button 
              onClick={onQuoteClick}
              className="bg-oakblue-600 hover:bg-oakblue-700"
            >
              <Calculator className="w-4 h-4 mr-2" />
              Request Quote
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

// ==================== HERO SECTION ====================
const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-rose-50 via-white to-amber-50 py-16 md:py-20 relative">
      <div className="container-main">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-14 h-14 bg-rose-500 rounded-xl flex items-center justify-center">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <div>
              <span className="text-sm font-medium text-rose-600 block">Delivered by EcoTec</span>
              <span className="text-xs text-slate-500">The electrical branch of Oakrange</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            PAT Testing Services
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            Portable Appliance Testing to keep your workplace safe and compliant. 
            Delivered by <strong className="text-slate-800">EcoTec Electrical</strong> - the electrical services division of the Oakrange group.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 h-auto"
              asChild
            >
              <a href="https://ecotecelectrical.com" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-5 h-5 mr-2" />
                Visit EcoTec Electrical
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

// ==================== WHAT IS PAT ====================
const WhatIsPATSection = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">What is PAT Testing?</h2>
            <p className="text-lg text-slate-600 mb-6">
              Portable Appliance Testing (PAT) is the examination of electrical appliances and equipment 
              to ensure they are safe to use. It involves a combination of visual inspection and electrical tests.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ClipboardCheck className="w-5 h-5 text-rose-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Visual Inspection</h3>
                  <p className="text-sm text-slate-600">Checking for damage, wear, and obvious faults</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Plug className="w-5 h-5 text-rose-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Electrical Testing</h3>
                  <p className="text-sm text-slate-600">Earth continuity, insulation resistance, and polarity checks</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileCheck className="w-5 h-5 text-rose-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Documentation</h3>
                  <p className="text-sm text-slate-600">Pass/fail labels and detailed equipment register</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                Why PAT Testing Matters
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-slate-900">Legal Compliance</p>
                  <p className="text-sm text-slate-600">Employers must ensure electrical equipment is safe under the Electricity at Work Regulations 1989</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-slate-900">Insurance Requirements</p>
                  <p className="text-sm text-slate-600">Many insurance policies require evidence of regular PAT testing</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-slate-900">Safety First</p>
                  <p className="text-sm text-slate-600">Protect staff and visitors from electrical hazards</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-slate-900">Due Diligence</p>
                  <p className="text-sm text-slate-600">Demonstrate your commitment to workplace safety</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

// ==================== WHO ITS FOR ====================
const WhoItsForSection = () => {
  const audiences = [
    { icon: Building2, label: 'Offices & Commercial Premises' },
    { icon: Users, label: 'Workshops & Garages' },
    { icon: Building2, label: 'Landlords & Property Managers' },
    { icon: Users, label: 'Schools & Training Centres' },
    { icon: Building2, label: 'Retail & Hospitality' },
    { icon: Users, label: 'Construction Sites' },
  ]

  return (
    <section className="py-16 md:py-20 bg-slate-50">
      <div className="container-main">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Who Needs PAT Testing?</h2>
          <p className="text-lg text-slate-600">
            Any business or organisation that uses portable electrical equipment should have regular PAT testing.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {audiences.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl border border-slate-200 flex items-center gap-4 hover:border-rose-300 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-rose-600" />
              </div>
              <span className="font-medium text-slate-800">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ==================== ECOTEC INFO ====================
const EcoTecSection = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-main">
        <div className="bg-gradient-to-br from-rose-500 to-rose-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                <span>Part of the Oakrange Group</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About EcoTec Electrical</h2>
              <p className="text-rose-100 text-lg mb-6">
                EcoTec Electrical is the electrical services division of Oakrange Engineering. While Oakrange 
                handles calibration, EcoTec specialises in PAT testing, fixed wire testing, and other 
                electrical compliance services.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-rose-200" />
                  <span>Fully qualified and insured engineers</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-rose-200" />
                  <span>Testing to IET Code of Practice</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-rose-200" />
                  <span>Nationwide coverage</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-rose-200" />
                  <span>Combined visits with calibration available</span>
                </li>
              </ul>
              <Button 
                size="lg"
                className="bg-white text-rose-600 hover:bg-rose-50"
                asChild
              >
                <a href="https://ecotecelectrical.com" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Visit EcoTec Electrical
                </a>
              </Button>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
                <div className="text-center">
                  <Zap className="w-16 h-16 text-white mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">EcoTec Electrical</h3>
                  <p className="text-rose-200 mb-4">Electrical Testing & Compliance</p>
                  <div className="border-t border-white/20 pt-4 mt-4">
                    <p className="text-sm text-rose-200">Services include:</p>
                    <p className="text-white font-medium mt-2">
                      PAT Testing • Fixed Wire Testing • Emergency Lighting • Fire Alarms
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ==================== COMBINED QUOTE CTA ====================
const CombinedQuoteCTA = ({ onQuoteClick }) => {
  return (
    <section className="py-16 md:py-20 bg-slate-50">
      <div className="container-main">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Need Calibration AND PAT Testing?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Save time and money by combining your calibration and PAT testing in a single coordinated visit. 
            We will work with EcoTec to schedule both services together.
          </p>
          <Button 
            size="lg"
            onClick={onQuoteClick}
            className="bg-oakblue-600 hover:bg-oakblue-700 text-white px-8 py-4 h-auto"
          >
            <Calculator className="w-5 h-5 mr-2" />
            Request a Combined Quote
          </Button>
          <p className="text-sm text-slate-500 mt-4">
            Your quote request will include PAT testing via EcoTec
          </p>
        </div>
      </div>
    </section>
  )
}

// ==================== QUOTE BUILDER ====================
const QuoteBuilder = ({ isOpen, onClose, includePAT = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    serviceType: includePAT ? 'calibration-pat' : '',
    applianceCount: '',
    location: '',
    message: '',
    patViaEcotec: includePAT,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Quote request:', formData)
    alert('Thank you! We will contact you shortly with your combined quote.')
    onClose()
  }

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-2xl flex items-center gap-2">
            <Calculator className="w-6 h-6 text-oakblue-600" />
            Request a Quote
          </SheetTitle>
          <SheetDescription>
            Get a combined quote for calibration and PAT testing services.
          </SheetDescription>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
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
                <Label htmlFor="phone">Phone</Label>
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
              <Label htmlFor="company">Company Name</Label>
              <Input
                id="company"
                placeholder="Your Company Ltd"
                value={formData.company}
                onChange={(e) => handleChange('company', e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-200">
            <div className="space-y-2">
              <Label htmlFor="serviceType">Services Needed *</Label>
              <Select 
                value={formData.serviceType} 
                onValueChange={(value) => handleChange('serviceType', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select services" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="calibration-pat">Calibration + PAT Testing (Combined)</SelectItem>
                  <SelectItem value="pat-only">PAT Testing Only (via EcoTec)</SelectItem>
                  <SelectItem value="calibration-only">Calibration Only</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="applianceCount">Approx. Appliances</Label>
                <Select 
                  value={formData.applianceCount} 
                  onValueChange={(value) => handleChange('applianceCount', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-25">1-25</SelectItem>
                    <SelectItem value="26-50">26-50</SelectItem>
                    <SelectItem value="51-100">51-100</SelectItem>
                    <SelectItem value="101-250">101-250</SelectItem>
                    <SelectItem value="250+">250+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Your Postcode</Label>
                <Input
                  id="location"
                  placeholder="e.g. B1 1AA"
                  value={formData.location}
                  onChange={(e) => handleChange('location', e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Additional Details</Label>
              <Textarea
                id="message"
                placeholder="Tell us about your calibration and PAT testing needs..."
                rows={4}
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
              />
            </div>

            <div className="flex items-start space-x-2 pt-2 bg-rose-50 p-4 rounded-lg">
              <Checkbox 
                id="patViaEcotec" 
                checked={formData.patViaEcotec}
                onCheckedChange={(checked) => handleChange('patViaEcotec', checked)}
              />
              <div>
                <Label htmlFor="patViaEcotec" className="text-sm cursor-pointer font-medium text-rose-800">
                  Include PAT Testing via EcoTec
                </Label>
                <p className="text-xs text-rose-600 mt-1">
                  Your request will be coordinated between Oakrange and EcoTec Electrical
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200">
            <Button type="submit" className="bg-oakblue-600 hover:bg-oakblue-700 w-full text-lg py-6">
              Submit Combined Quote Request
            </Button>
            <p className="text-xs text-slate-500 text-center mt-4">
              We typically respond within 24 hours.
            </p>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  )
}

// ==================== MAIN PAGE ====================
export default function PATTestingPage() {
  const [quoteBuilderOpen, setQuoteBuilderOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Navigation onQuoteClick={() => setQuoteBuilderOpen(true)} />
      <HeroSection />
      <WhatIsPATSection />
      <WhoItsForSection />
      <EcoTecSection />
      <CombinedQuoteCTA onQuoteClick={() => setQuoteBuilderOpen(true)} />

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-8">
        <div className="container-main">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm">&copy; {new Date().getFullYear()} Oakrange Engineering Ltd. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm">
              <a href="tel:+441234567890" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                +44 (0) 1234 567890
              </a>
              <a href="mailto:info@oakrange.co.uk" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                info@oakrange.co.uk
              </a>
            </div>
          </div>
        </div>
      </footer>

      <QuoteBuilder 
        isOpen={quoteBuilderOpen} 
        onClose={() => setQuoteBuilderOpen(false)}
        includePAT={true}
      />
    </div>
  )
}
