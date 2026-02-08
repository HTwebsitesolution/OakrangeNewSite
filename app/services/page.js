'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Wrench, Gauge, PlaneTakeoff, Settings, FileCheck, Zap,
  ChevronRight, ArrowRight, CheckCircle2, Users, Package,
  ClipboardList, Award, Clock, Phone, Calculator, Sparkles,
  MapPin, Shield, ExternalLink, HelpCircle, Building2,
  Car, Plane, Factory, Home, Menu, X, Mail
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

// ==================== BRAND LOGO ====================
const BrandLogo = () => {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/oakrange-3d-logo.png"
        alt="Oakrange Engineering Ltd"
        width={220}
        height={60}
        priority
        className="h-[112.78125px] w-auto logo-animated logo-hover-effect logo-color-adjust"
      />
    </Link>
  )
}

// ==================== NAVIGATION ====================
const Navigation = ({ onQuoteClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Industries', href: '/#industries' },
    { label: 'Process', href: '/#process' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'Contact', href: '/#contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200">
      <div className="container-main">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <BrandLogo />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-slate-600 hover:text-primary font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              onClick={onQuoteClick}
              className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-2.5 rounded-lg transition-all"
            >
              <Calculator className="w-4 h-4 mr-2" />
              Request a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 py-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-4 py-3 text-slate-600 hover:text-primary hover:bg-slate-50 rounded-lg font-medium transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 pt-4 border-t border-slate-100 mt-2">
                <Button 
                  onClick={() => {
                    setMobileMenuOpen(false)
                    onQuoteClick()
                  }}
                  className="bg-primary hover:bg-primary/90 text-white w-full"
                >
                  <Calculator className="w-4 h-4 mr-2" />
                  Request a Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// ==================== PAGE HEADER ====================
const PageHeader = () => {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-slate-50 py-16 md:py-20">
      <div className="container-main">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            <span>UKAS-Traceable Services</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Calibration Services
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            From onsite workshop calibration to specialist automotive diagnostics and airfield equipment — 
            we deliver audit-ready certificates with minimal disruption to your operations.
          </p>
        </div>
      </div>
    </section>
  )
}

// ==================== SERVICE HUB CARDS ====================
const ServiceHubCards = () => {
  const services = [
    {
      id: 'onsite-workshop',
      icon: Wrench,
      title: 'Onsite Workshop Calibration',
      description: 'Torque wrenches, pressure gauges, and test equipment calibrated at your premises.',
      color: 'bg-blue-500',
    },
    {
      id: 'automotive-diagnostic',
      icon: Car,
      title: 'Specialist Automotive Diagnostic',
      description: 'VAS units, diagnostic equipment, and specialist automotive test systems.',
      color: 'bg-emerald-500',
    },
    {
      id: 'airfield-equipment',
      icon: PlaneTakeoff,
      title: 'Airfield Equipment Calibration',
      description: 'Precision calibration for GA airfields, hangars, and aviation maintenance.',
      color: 'bg-purple-500',
    },
    {
      id: 'repairs-support',
      icon: Settings,
      title: 'In-house Repairs & Support',
      description: 'Equipment repairs, adjustments, and calibration support at our laboratory.',
      color: 'bg-amber-500',
    },
    {
      id: 'certificate-portal',
      icon: FileCheck,
      title: 'Certificate Management & Portal',
      description: '24/7 access to your calibration certificates through our secure portal.',
      color: 'bg-cyan-500',
    },
    {
      id: 'pat-testing',
      icon: Zap,
      title: 'PAT Testing',
      description: 'Portable appliance testing handled by our trusted partner, EcoTec.',
      color: 'bg-rose-500',
      isExternal: true,
    },
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-16 bg-white">
      <div className="container-main">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => scrollToSection(service.id)}
              className="text-left group"
            >
              <Card className="h-full border-slate-200 hover:border-primary/40 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                <CardHeader>
                  <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors flex items-center gap-2">
                    {service.title}
                    {service.isExternal && (
                      <ExternalLink className="w-4 h-4 text-slate-400" />
                    )}
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                    Learn more
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </CardContent>
              </Card>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

// ==================== NOT SURE BLOCK ====================
const NotSureBlock = ({ onQuoteClick }) => {
  return (
    <section className="py-12 bg-slate-50 border-y border-slate-200">
      <div className="container-main">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <HelpCircle className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-1">Not sure what you need?</h3>
              <p className="text-slate-600">
                Our AI Quote Builder will guide you through selecting the right services for your equipment.
              </p>
            </div>
          </div>
          <Button 
            onClick={onQuoteClick}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 flex-shrink-0"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Open Quote Builder
          </Button>
        </div>
      </div>
    </section>
  )
}

// ==================== SERVICE DETAIL SECTION COMPONENT ====================
const ServiceDetailSection = ({ 
  id, 
  icon: Icon, 
  iconColor, 
  title, 
  tagline,
  whoItsFor, 
  whatsIncluded, 
  workflow, 
  whatYouReceive,
  onQuoteClick,
  isExternal,
  externalLink,
  externalNote
}) => {
  return (
    <section id={id} className="py-20 border-b border-slate-200 scroll-mt-24">
      <div className="container-main">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 mb-12">
          <div className={`w-20 h-20 ${iconColor} rounded-2xl flex items-center justify-center flex-shrink-0`}>
            <Icon className="w-10 h-10 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">{title}</h2>
            <p className="text-xl text-slate-600">{tagline}</p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Who It's For */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-slate-900">Who It's For</h3>
              </div>
              <ul className="space-y-3">
                {whoItsFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What's Included */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Package className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-slate-900">What's Included</h3>
              </div>
              <ul className="space-y-3">
                {whatsIncluded.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Typical Workflow */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <ClipboardList className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-slate-900">Typical Workflow</h3>
              </div>
              <ol className="space-y-4">
                {workflow.map((step, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="pt-1">
                      <p className="text-slate-700">{step}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* What You Receive */}
            <div className="bg-primary rounded-xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-5 h-5 text-white/80" />
                <h3 className="text-lg font-semibold">What You Receive</h3>
              </div>
              <ul className="space-y-3">
                {whatYouReceive.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-white/80 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          {isExternal ? (
            <>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8"
                asChild
              >
                <a href={externalLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Visit EcoTec for PAT Testing
                </a>
              </Button>
              {externalNote && (
                <p className="text-sm text-slate-500">{externalNote}</p>
              )}
            </>
          ) : (
            <>
              <Button 
                onClick={onQuoteClick}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Request a Quote for {title}
              </Button>
              <span className="text-slate-500 text-sm">Response within 24 hours</span>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

// ==================== QUOTE BUILDER ====================
const QuoteBuilder = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    serviceType: '',
    instrumentCount: '',
    location: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Quote request:', formData)
    alert('Thank you! We will contact you shortly with your quote.')
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
            <Calculator className="w-6 h-6 text-primary" />
            Request a Quote
          </SheetTitle>
          <SheetDescription>
            Fill in your details and we'll provide a tailored quote within 24 hours.
          </SheetDescription>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-900 flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              Contact Information
            </h4>
            
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

          {/* Service Requirements */}
          <div className="space-y-4 pt-4 border-t border-slate-200">
            <h4 className="font-semibold text-slate-900 flex items-center gap-2">
              <Gauge className="w-4 h-4 text-primary" />
              Service Requirements
            </h4>

            <div className="space-y-2">
              <Label htmlFor="serviceType">Service Type *</Label>
              <Select 
                value={formData.serviceType} 
                onValueChange={(value) => handleChange('serviceType', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="onsite-workshop">Onsite Workshop Calibration</SelectItem>
                  <SelectItem value="automotive-diagnostic">Specialist Automotive Diagnostic</SelectItem>
                  <SelectItem value="airfield-equipment">Airfield Equipment Calibration</SelectItem>
                  <SelectItem value="repairs-support">In-house Repairs & Support</SelectItem>
                  <SelectItem value="certificate-portal">Certificate Management & Portal</SelectItem>
                  <SelectItem value="multiple">Multiple Services</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="instrumentCount">No. of Instruments</Label>
                <Select 
                  value={formData.instrumentCount} 
                  onValueChange={(value) => handleChange('instrumentCount', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-10">1-10</SelectItem>
                    <SelectItem value="11-25">11-25</SelectItem>
                    <SelectItem value="26-50">26-50</SelectItem>
                    <SelectItem value="51-100">51-100</SelectItem>
                    <SelectItem value="100+">100+</SelectItem>
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
              <Label htmlFor="message">Equipment Details</Label>
              <Textarea
                id="message"
                placeholder="Tell us about your instruments — makes, models, quantities, or any specific requirements..."
                rows={4}
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
              />
            </div>
          </div>

          {/* Submit */}
          <div className="pt-4 border-t border-slate-200">
            <Button type="submit" className="bg-primary hover:bg-primary/90 w-full text-lg py-6">
              <Calculator className="w-5 h-5 mr-2" />
              Submit Quote Request
            </Button>
            <p className="text-xs text-slate-500 text-center mt-4">
              We typically respond within 24 hours. For urgent enquiries, call us.
            </p>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  )
}

// ==================== FOOTER ====================
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container-main">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Gauge className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="font-bold text-white block">Oakrange Engineering</span>
              <span className="text-xs text-slate-500">UKAS-Traceable Calibration</span>
            </div>
          </div>
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
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Oakrange Engineering Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

// ==================== SERVICES DATA ====================
const servicesData = [
  {
    id: 'onsite-workshop',
    icon: Wrench,
    iconColor: 'bg-blue-500',
    title: 'Onsite Workshop Calibration',
    tagline: 'We come to you — calibrate your equipment with zero downtime and no shipping hassle.',
    whoItsFor: [
      'MOT stations and garages needing torque wrench calibration',
      'Tractor and agricultural dealerships',
      'Construction equipment workshops and plant hire depots',
      'Fleet maintenance facilities',
      'Any workshop with calibration-critical tools',
    ],
    whatsIncluded: [
      'Torque wrenches (click, dial, and digital types)',
      'Tyre pressure and inflation gauges',
      'Pressure test equipment and hydraulic gauges',
      'Micrometers, calipers, and dimensional tools',
      'Temperature probes and thermometers',
      'Weighing scales and balances',
    ],
    workflow: [
      'Send us your equipment list via email or our quote form',
      'We provide a fixed-price quotation within 24 hours',
      'Schedule a visit at a time that suits your operations',
      'Our engineer arrives with all reference standards and equipment',
      'Calibration performed onsite — typically same-day completion',
      'UKAS-traceable certificates uploaded to your portal within 48 hours',
    ],
    whatYouReceive: [
      'UKAS-traceable calibration certificates',
      'Calibration stickers/labels applied to each instrument',
      'Full traceability to national standards',
      '24/7 access to certificates via the Customer Portal',
      'Reminder notifications before recalibration is due',
    ],
  },
  {
    id: 'automotive-diagnostic',
    icon: Car,
    iconColor: 'bg-emerald-500',
    title: 'Specialist Automotive Diagnostic Calibration',
    tagline: 'Expert calibration for VAS units, diagnostic systems, and specialist automotive test equipment.',
    whoItsFor: [
      'Authorised vehicle dealerships (VW, Audi, BMW, Mercedes, etc.)',
      'Independent garages with manufacturer diagnostic tools',
      'MOT testing stations with emissions analysers',
      'Automotive training centres and colleges',
      'Classic car specialists with precision equipment',
    ],
    whatsIncluded: [
      'VAS diagnostic units and manufacturer-specific testers',
      'Emissions analysers and gas detection equipment',
      'Brake testers and rolling road dynamometers',
      'Headlamp beam setters and alignment equipment',
      'Battery and electrical system testers',
      'Specialist pressure and vacuum test equipment',
    ],
    workflow: [
      'Contact us with your diagnostic equipment details and serial numbers',
      'We confirm calibration capability and provide a quotation',
      'Onsite visit scheduled to minimise workshop disruption',
      'Equipment calibrated against traceable reference standards',
      'Adjustments performed where required and documented',
      'Comprehensive certificates issued with detailed measurement data',
    ],
    whatYouReceive: [
      'Certificates accepted by vehicle manufacturers for warranty work',
      'Detailed calibration data including before/after measurements',
      'Compliance documentation for MOT station audits',
      'Digital certificates accessible via Customer Portal',
      'Technical support and advice on calibration intervals',
    ],
  },
  {
    id: 'airfield-equipment',
    icon: PlaneTakeoff,
    iconColor: 'bg-purple-500',
    title: 'Airfield Equipment Calibration',
    tagline: 'Precision calibration for general aviation airfields, maintenance hangars, and flight training facilities.',
    whoItsFor: [
      'General aviation (GA) airfields and flying clubs',
      'Aircraft maintenance organisations (Part 145 approved)',
      'Flight training schools and academies',
      'Private hangar owners and aircraft syndicates',
      'Aviation engineering and avionics workshops',
    ],
    whatsIncluded: [
      'Torque wrenches used in aircraft maintenance',
      'Pitot-static test equipment',
      'Pressure gauges and manometers',
      'Digital multimeters and avionics test equipment',
      'Tyre pressure and inflation equipment',
      'Temperature and environmental monitoring instruments',
    ],
    workflow: [
      'Initial consultation to understand your calibration requirements',
      'Site survey if required for complex equipment setups',
      'Quotation provided with CAA/EASA compliance notes',
      'Scheduled visit to airfield — we work around your operations',
      'Calibration performed to aviation industry standards',
      'Full documentation pack provided for authority audits',
    ],
    whatYouReceive: [
      'UKAS-traceable certificates recognised by CAA and EASA',
      'Documentation suitable for Part 145 audit requirements',
      'Traceability statements for each calibrated instrument',
      'Secure portal access for instant certificate retrieval',
      'Priority scheduling for time-critical requirements',
    ],
  },
  {
    id: 'repairs-support',
    icon: Settings,
    iconColor: 'bg-amber-500',
    title: 'In-house Repairs & Calibration Support',
    tagline: "When onsite isn't suitable - send your equipment to our laboratory for repair, adjustment, and calibration.",
    whoItsFor: [
      'Businesses with equipment requiring specialist repair',
      'Instruments that need bench calibration for best accuracy',
      'Companies without space for onsite calibration work',
      'Equipment requiring adjustment before calibration',
      'Overflow calibration work during busy periods',
    ],
    whatsIncluded: [
      'Collection and delivery service available UK-wide',
      'Full inspection and condition assessment',
      'Repair and refurbishment of torque wrenches',
      'Adjustment to bring instruments back into specification',
      'Calibration following any repairs or adjustments',
      'Extended warranty on repair work',
    ],
    workflow: [
      'Request a collection or drop off at our laboratory',
      'We assess your equipment and provide a repair quotation',
      'Once approved, repairs and adjustments are completed',
      'Post-repair calibration performed and documented',
      'Equipment securely packaged and returned to you',
      'Certificates uploaded to your Customer Portal',
    ],
    whatYouReceive: [
      'Detailed repair report with work completed',
      'UKAS-traceable calibration certificate',
      'Warranty on all repair work (typically 12 months)',
      'Before and after measurement data',
      'Collection/delivery with full insurance cover',
    ],
  },
  {
    id: 'certificate-portal',
    icon: FileCheck,
    iconColor: 'bg-cyan-500',
    title: 'Certificate Management & Portal Access',
    tagline: 'All your calibration certificates in one place — searchable, downloadable, and audit-ready 24/7.',
    whoItsFor: [
      'Quality managers needing instant certificate access',
      'Multi-site businesses managing equipment across locations',
      'Companies preparing for ISO, UKAS-traceable, or industry audits',
      'Workshop managers tracking calibration schedules',
      'Anyone tired of searching filing cabinets for certificates',
    ],
    whatsIncluded: [
      'Secure online portal with individual login credentials',
      'Complete certificate archive — current and historical',
      'Search and filter by equipment, date, or location',
      'Download certificates as PDF or batch export',
      'Calibration due date dashboard and reporting',
      'Automated email reminders before calibration expires',
    ],
    workflow: [
      'Portal account created automatically with your first calibration',
      'Login credentials sent via secure email',
      'All future certificates automatically uploaded within 48 hours',
      'Set up email reminders at intervals that suit you',
      'Download certificates anytime — even during audits',
      'Add team members with their own portal access',
    ],
    whatYouReceive: [
      '24/7 access to all your calibration certificates',
      'No more lost paperwork or searching for documents',
      'Audit-ready certificate packs at the click of a button',
      'Proactive reminders so calibration never lapses',
      'Unlimited users — add your whole team',
    ],
  },
  {
    id: 'pat-testing',
    icon: Zap,
    iconColor: 'bg-rose-500',
    title: 'PAT Testing',
    tagline: 'Portable Appliance Testing delivered by our trusted partner EcoTec — compliance made simple.',
    whoItsFor: [
      'Workshops needing PAT testing for portable equipment',
      'Businesses requiring combined calibration and PAT services',
      'Landlords and property managers',
      'Schools, colleges, and training centres',
      'Any organisation with portable electrical equipment',
    ],
    whatsIncluded: [
      'Full PAT testing to IET Code of Practice',
      'Visual inspection and electrical testing',
      'Pass/fail labelling on all tested appliances',
      'Detailed register of all tested equipment',
      'Recommendations for failed or borderline items',
      'Combined visits with Oakrange calibration where possible',
    ],
    workflow: [
      'Contact us and we will connect you with EcoTec',
      'EcoTec provides a quotation based on appliance count',
      'Testing scheduled - can be combined with calibration visits',
      'All appliances tested and labelled onsite',
      'Certificate and equipment register provided',
      'Results shared with Oakrange for your records',
    ],
    whatYouReceive: [
      'PAT testing certificate and full appliance register',
      'Pass/fail labels on all tested equipment',
      'Compliance with insurance and HSE requirements',
      'Coordinated scheduling with calibration visits',
      'Single point of contact through Oakrange',
    ],
    isExternal: true,
    externalLink: 'https://ecotec-services.co.uk',
    externalNote: 'PAT Testing is provided by EcoTec — our trusted partner for electrical testing services.',
  },
]

// ==================== MAIN PAGE ====================
export default function ServicesPage() {
  const [quoteBuilderOpen, setQuoteBuilderOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation onQuoteClick={() => setQuoteBuilderOpen(true)} />

      {/* Main Content */}
      <main>
        <PageHeader />
        <ServiceHubCards />
        <NotSureBlock onQuoteClick={() => setQuoteBuilderOpen(true)} />
        
        {/* Service Detail Sections */}
        {servicesData.map((service) => (
          <ServiceDetailSection
            key={service.id}
            {...service}
            onQuoteClick={() => setQuoteBuilderOpen(true)}
          />
        ))}

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary/90">
          <div className="container-main text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Your Equipment Calibrated?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Request a quote today or access your existing certificates through the Customer Portal.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setQuoteBuilderOpen(true)}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-lg font-semibold transition-colors bg-white text-primary hover:bg-primary/10 hover:text-primary px-8 py-4 h-auto shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                <Calculator className="w-5 h-5" />
                Request a Quote
              </button>
              <a
                href="#portal"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-lg font-semibold transition-colors border border-white/30 text-white bg-transparent hover:bg-white/10 hover:text-white px-8 py-4 h-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 disabled:pointer-events-none disabled:opacity-50"
              >
                <ExternalLink className="w-5 h-5" />
                Customer Portal
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Quote Builder */}
      <QuoteBuilder 
        isOpen={quoteBuilderOpen} 
        onClose={() => setQuoteBuilderOpen(false)} 
      />
    </div>
  )
}
