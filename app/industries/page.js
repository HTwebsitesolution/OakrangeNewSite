'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Wrench, Gauge, PlaneTakeoff, HardHat, Tractor,
  ChevronRight, ArrowRight, CheckCircle2, AlertTriangle,
  Clock, Shield, Calculator, Sparkles, MapPin, Menu, X,
  Mail, Phone, ExternalLink, Building2, Users, Target,
  FileCheck, Truck, ClipboardList, AlertCircle, ThumbsUp,
  Package, Cog, Car, Plane
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

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
    { label: 'Industries', href: '/industries' },
    { label: 'Process', href: '/#process' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'Contact', href: '/#contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200">
      <div className="container-main">
        <div className="flex items-center justify-between h-16 md:h-20">
          <BrandLogo />

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

          <div className="hidden md:flex items-center gap-4">
            <Button 
              onClick={onQuoteClick}
              className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-2.5 rounded-lg transition-all"
            >
              <Calculator className="w-4 h-4 mr-2" />
              Get an Estimate
            </Button>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

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
                  Get an Estimate
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
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 md:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>
      
      <div className="container-main relative">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary/100/20 text-primary/60 px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-primary/30">
            <Building2 className="w-4 h-4" />
            <span>Industry-Specific Calibration</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Your Industry.{' '}
            <span className="text-primary/70">Your Equipment.</span>{' '}
            Our Expertise.
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            We understand that every workshop, dealership, and airfield has unique calibration needs. 
            Here is how we serve your specific industry with precision and care.
          </p>
        </div>
      </div>
    </section>
  )
}

// ==================== INDUSTRY NAV ====================
const IndustryNav = () => {
  const industries = [
    { id: 'automotive', label: 'Automotive Workshops', icon: Car },
    { id: 'agriculture', label: 'Tractor & Agriculture', icon: Tractor },
    { id: 'construction', label: 'Construction Workshops', icon: HardHat },
    { id: 'airfields', label: 'Airfields', icon: PlaneTakeoff },
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
    <section className="py-8 bg-white border-b border-slate-200 sticky top-16 md:top-20 z-40">
      <div className="container-main">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => scrollToSection(industry.id)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 hover:border-primary/40 hover:bg-primary/10 text-slate-700 hover:text-primary font-medium transition-all group"
            >
              <industry.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">{industry.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

// ==================== INDUSTRY SECTION COMPONENT ====================
const IndustrySection = ({ 
  id,
  icon: Icon,
  iconColor,
  bgColor,
  title,
  subtitle,
  equipment,
  risks,
  approach,
  onQuoteClick
}) => {
  return (
    <section id={id} className="py-20 scroll-mt-40">
      <div className="container-main">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 mb-12">
          <div className={`w-20 h-20 ${iconColor} rounded-2xl flex items-center justify-center flex-shrink-0`}>
            <Icon className="w-10 h-10 text-white" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{title}</h2>
            <p className="text-xl text-slate-600">{subtitle}</p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Equipment Column */}
          <div className={`${bgColor} rounded-2xl p-8`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                <Package className="w-5 h-5 text-slate-700" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Typical Equipment</h3>
            </div>
            <ul className="space-y-3">
              {equipment.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-slate-800">{item.name}</span>
                    {item.examples && (
                      <p className="text-sm text-slate-600 mt-0.5">{item.examples}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Risks Column */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Risks of Non-Compliance</h3>
            </div>
            <ul className="space-y-4">
              {risks.map((risk, index) => (
                <li key={index} className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-slate-800">{risk.title}</span>
                    <p className="text-sm text-slate-600 mt-0.5">{risk.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Approach Column */}
          <div className="bg-primary rounded-2xl p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <ThumbsUp className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Our Recommendation</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3">
                <div className={`w-3 h-3 rounded-full ${approach.primary === 'onsite' ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                <span className="font-medium text-white">
                  {approach.primary === 'onsite' ? 'Onsite Calibration' : 'Send-in Service'}
                </span>
                <span className="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full ml-auto">Recommended</span>
              </div>
              <p className="text-white/90 text-sm leading-relaxed">
                {approach.description}
              </p>
              <div className="pt-4 border-t border-white/20">
                <p className="text-sm font-medium text-white/80 mb-2">Why this approach:</p>
                <ul className="space-y-2">
                  {approach.reasons.map((reason, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-white/90">
                      <CheckCircle2 className="w-4 h-4 text-white/80 flex-shrink-0 mt-0.5" />
                      {reason}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-200">
          <div className="flex-1 text-center sm:text-left">
            <h4 className="font-semibold text-slate-900 mb-1">Ready to discuss your {title.toLowerCase()} calibration needs?</h4>
            <p className="text-slate-600 text-sm">Get a tailored estimate based on your specific equipment and requirements.</p>
          </div>
          <Button 
            onClick={onQuoteClick}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 flex-shrink-0"
          >
            <Calculator className="w-5 h-5 mr-2" />
            Get an Estimate
          </Button>
        </div>
      </div>
    </section>
  )
}

// ==================== COMPARISON TABLE ====================
const ComparisonTable = ({ onQuoteClick }) => {
  const comparisonData = [
    {
      industry: 'Automotive Workshops',
      icon: Car,
      commonNeeds: 'Torque wrenches, tyre gauges, diagnostic equipment, brake testers',
      servicePath: 'Onsite Workshop Calibration',
      frequency: 'Annual',
      highlight: true,
    },
    {
      industry: 'Tractor & Agriculture',
      icon: Tractor,
      commonNeeds: 'Hydraulic gauges, torque tools, pressure testers, scales',
      servicePath: 'Onsite Workshop Calibration',
      frequency: 'Annual',
      highlight: false,
    },
    {
      industry: 'Construction Workshops',
      icon: HardHat,
      commonNeeds: 'Lifting equipment gauges, pressure systems, torque tools',
      servicePath: 'Onsite + Specialist Support',
      frequency: '6-12 months',
      highlight: false,
    },
    {
      industry: 'Airfields & Aviation',
      icon: PlaneTakeoff,
      commonNeeds: 'Pitot-static testers, torque wrenches, pressure instruments',
      servicePath: 'Onsite Airfield Calibration',
      frequency: 'Per regulations',
      highlight: true,
    },
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="w-12 h-1 bg-primary rounded-full mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Industry Comparison
          </h2>
          <p className="text-lg text-slate-600">
            Quick reference guide to help you understand the calibration needs for your industry.
          </p>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-slate-50">
                  <TableHead className="font-semibold text-slate-900 py-4">Industry</TableHead>
                  <TableHead className="font-semibold text-slate-900 py-4">Common Equipment Needs</TableHead>
                  <TableHead className="font-semibold text-slate-900 py-4">Recommended Service</TableHead>
                  <TableHead className="font-semibold text-slate-900 py-4">Typical Frequency</TableHead>
                  <TableHead className="font-semibold text-slate-900 py-4 text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((row, index) => (
                  <TableRow key={index} className={row.highlight ? 'bg-primary/10/50' : ''}>
                    <TableCell className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <row.icon className="w-5 h-5 text-slate-600" />
                        </div>
                        <span className="font-medium text-slate-900">{row.industry}</span>
                      </div>
                    </TableCell>
                    <TableCell className="py-4">
                      <span className="text-slate-600 text-sm">{row.commonNeeds}</span>
                    </TableCell>
                    <TableCell className="py-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/20 text-primary">
                        {row.servicePath}
                      </span>
                    </TableCell>
                    <TableCell className="py-4">
                      <span className="text-slate-700 font-medium">{row.frequency}</span>
                    </TableCell>
                    <TableCell className="py-4 text-right">
                      <Button 
                        onClick={onQuoteClick}
                        variant="outline"
                        size="sm"
                        className="border-primary/30 text-primary hover:bg-primary/10"
                      >
                        Get Estimate
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Note */}
        <p className="text-center text-sm text-slate-500 mt-6">
          Calibration frequencies may vary based on usage intensity, manufacturer recommendations, and industry regulations.
        </p>
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
    industry: '',
    instrumentCount: '',
    location: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Quote request:', formData)
    alert('Thank you! We will contact you shortly with your estimate.')
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
            Get an Estimate
          </SheetTitle>
          <SheetDescription>
            Tell us about your industry and equipment - we will provide a tailored quote within 24 hours.
          </SheetDescription>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
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

          <div className="space-y-4 pt-4 border-t border-slate-200">
            <h4 className="font-semibold text-slate-900 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-primary" />
              Industry & Equipment
            </h4>

            <div className="space-y-2">
              <Label htmlFor="industry">Your Industry *</Label>
              <Select 
                value={formData.industry} 
                onValueChange={(value) => handleChange('industry', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="automotive">Automotive Workshop / Garage</SelectItem>
                  <SelectItem value="agriculture">Tractor / Agriculture Dealership</SelectItem>
                  <SelectItem value="construction">Construction Workshop / Plant Hire</SelectItem>
                  <SelectItem value="airfield">Airfield / Aviation</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
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
                placeholder="Tell us about your equipment - torque wrenches, gauges, diagnostic tools, etc..."
                rows={4}
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
              />
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200">
            <Button type="submit" className="bg-primary hover:bg-primary/90 w-full text-lg py-6">
              <Calculator className="w-5 h-5 mr-2" />
              Get My Estimate
            </Button>
            <p className="text-xs text-slate-500 text-center mt-4">
              No obligation. We typically respond within 24 hours.
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

// ==================== INDUSTRIES DATA ====================
const industriesData = [
  {
    id: 'automotive',
    icon: Car,
    iconColor: 'bg-blue-600',
    bgColor: 'bg-blue-50',
    title: 'Automotive Workshops',
    subtitle: 'MOT stations, garages, dealerships, and fleet maintenance facilities.',
    equipment: [
      { name: 'Torque Wrenches', examples: 'Click-type, dial, digital, pneumatic' },
      { name: 'Tyre Pressure Gauges', examples: 'Handheld and inflation systems' },
      { name: 'Diagnostic Equipment', examples: 'VAS units, manufacturer testers' },
      { name: 'Brake Testers', examples: 'Rolling road, decelerometers' },
      { name: 'Emissions Analysers', examples: 'Gas analysers, smoke meters' },
      { name: 'Headlamp Beam Setters', examples: 'Alignment and aim testers' },
    ],
    risks: [
      { 
        title: 'MOT Station Compliance', 
        description: 'DVSA can suspend your ATL if equipment is out of calibration.' 
      },
      { 
        title: 'Warranty Work Rejection', 
        description: 'Manufacturers may reject warranty claims without valid calibration certificates.' 
      },
      { 
        title: 'Safety Liability', 
        description: 'Incorrectly torqued wheel bolts can lead to serious accidents and legal exposure.' 
      },
      { 
        title: 'Customer Trust', 
        description: 'Professional workshops need proof of calibrated equipment for customer confidence.' 
      },
    ],
    approach: {
      primary: 'onsite',
      description: 'We recommend onsite calibration for automotive workshops. Our engineers visit your premises with all necessary reference standards, minimising disruption to your daily operations.',
      reasons: [
        'Zero downtime - calibrate while you work',
        'No shipping or packaging required',
        'Immediate certificate issuance',
        'Covers all common workshop equipment in one visit',
      ],
    },
  },
  {
    id: 'agriculture',
    icon: Tractor,
    iconColor: 'bg-emerald-600',
    bgColor: 'bg-emerald-50',
    title: 'Tractor & Agriculture Workshops',
    subtitle: 'Agricultural dealerships, farm workshops, and machinery service centres.',
    equipment: [
      { name: 'Hydraulic Pressure Gauges', examples: 'System testers, flow meters' },
      { name: 'Torque Wrenches', examples: 'For PTO shafts, wheel bolts' },
      { name: 'Weighing Equipment', examples: 'Platform scales, axle weighers' },
      { name: 'Pressure Test Equipment', examples: 'Diesel injector testers' },
      { name: 'Temperature Probes', examples: 'Engine and coolant monitoring' },
      { name: 'Spray Calibration Equipment', examples: 'Nozzle testers, flow checkers' },
    ],
    risks: [
      { 
        title: 'Dealer Network Standards', 
        description: 'Manufacturer audits require current calibration certificates for approved dealer status.' 
      },
      { 
        title: 'Seasonal Downtime', 
        description: 'Equipment failures during harvest or planting season can be catastrophic for customers.' 
      },
      { 
        title: 'Warranty Compliance', 
        description: 'Service work without calibrated tools may void manufacturer warranties.' 
      },
      { 
        title: 'Insurance Requirements', 
        description: 'Many agricultural insurers require proof of calibrated service equipment.' 
      },
    ],
    approach: {
      primary: 'onsite',
      description: 'Onsite calibration works best for agricultural workshops. We schedule visits during quieter periods or outside peak seasons to avoid disrupting your service operations.',
      reasons: [
        'Flexible scheduling around seasonal demands',
        'All equipment calibrated in one visit',
        'No need to transport heavy hydraulic test gear',
        'Certificates uploaded to portal for easy audit access',
      ],
    },
  },
  {
    id: 'construction',
    icon: HardHat,
    iconColor: 'bg-amber-600',
    bgColor: 'bg-amber-50',
    title: 'Construction Workshops',
    subtitle: 'Plant hire depots, construction equipment workshops, and heavy machinery service centres.',
    equipment: [
      { name: 'Lifting Equipment Gauges', examples: 'Crane load indicators, SWL testers' },
      { name: 'Pressure Systems', examples: 'Hydraulic and pneumatic gauges' },
      { name: 'Torque Tools', examples: 'High-torque wrenches, multipliers' },
      { name: 'Dimensional Equipment', examples: 'Measuring tapes, laser levels' },
      { name: 'Temperature Monitoring', examples: 'Concrete curing thermometers' },
      { name: 'Force & Load Testers', examples: 'Dynamometers, load cells' },
    ],
    risks: [
      { 
        title: 'LOLER Compliance', 
        description: 'Lifting equipment regulations require traceable calibration for all test equipment.' 
      },
      { 
        title: 'Site Safety Audits', 
        description: 'Principal contractors often require calibration certificates before allowing equipment on site.' 
      },
      { 
        title: 'Equipment Hire Liability', 
        description: 'Hire companies face liability if equipment fails due to improper maintenance.' 
      },
      { 
        title: 'Insurance Claims', 
        description: 'Uncalibrated equipment can invalidate insurance in the event of an incident.' 
      },
    ],
    approach: {
      primary: 'onsite',
      description: 'For construction workshops, we recommend a combined approach: onsite calibration for standard tools, with specialist equipment sent to our laboratory for complex calibrations.',
      reasons: [
        'Onsite for common torque and pressure equipment',
        'Lab-based calibration for high-accuracy load cells',
        'LOLER-compliant documentation provided',
        'Flexible scheduling for depot locations',
      ],
    },
  },
  {
    id: 'airfields',
    icon: PlaneTakeoff,
    iconColor: 'bg-purple-600',
    bgColor: 'bg-purple-50',
    title: 'Airfields & Aviation',
    subtitle: 'GA airfields, flight schools, maintenance hangars, and aircraft engineering facilities.',
    equipment: [
      { name: 'Torque Wrenches', examples: 'Aircraft-grade, inch-pound and Nm' },
      { name: 'Pitot-Static Testers', examples: 'Airspeed and altitude calibrators' },
      { name: 'Pressure Instruments', examples: 'Manifold pressure, vacuum gauges' },
      { name: 'Avionics Test Equipment', examples: 'Multimeters, signal generators' },
      { name: 'Tyre Pressure Equipment', examples: 'Aircraft tyre inflation systems' },
      { name: 'Environmental Monitoring', examples: 'Hangar temperature and humidity' },
    ],
    risks: [
      { 
        title: 'CAA/EASA Compliance', 
        description: 'Aviation authorities require UKAS-traceable calibration for all maintenance equipment.' 
      },
      { 
        title: 'Part 145 Audit Findings', 
        description: 'Maintenance organisations can lose approval status for calibration non-compliance.' 
      },
      { 
        title: 'Airworthiness Liability', 
        description: 'Incorrectly calibrated tools can affect aircraft safety and lead to serious consequences.' 
      },
      { 
        title: 'Insurance Validity', 
        description: 'Aviation insurance policies typically mandate current calibration certificates.' 
      },
    ],
    approach: {
      primary: 'onsite',
      description: 'We provide specialised onsite calibration for airfields, understanding the unique requirements of aviation. Our engineers hold appropriate airside access and work around your flying schedule.',
      reasons: [
        'UKAS-traceable certificates recognised by CAA and EASA',
        'Engineers with airside security clearance',
        'Calibration scheduled around flying operations',
        'Full Part 145 audit documentation provided',
      ],
    },
  },
]

// ==================== MAIN PAGE ====================
export default function IndustriesPage() {
  const [quoteBuilderOpen, setQuoteBuilderOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Navigation onQuoteClick={() => setQuoteBuilderOpen(true)} />

      <main>
        <PageHeader />
        <IndustryNav />
        
        {/* Industry Sections */}
        {industriesData.map((industry, index) => (
          <div key={industry.id} className={index % 2 === 1 ? 'bg-slate-50' : 'bg-white'}>
            <IndustrySection
              {...industry}
              onQuoteClick={() => setQuoteBuilderOpen(true)}
            />
          </div>
        ))}

        {/* Comparison Table */}
        <ComparisonTable onQuoteClick={() => setQuoteBuilderOpen(true)} />

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary/90">
          <div className="container-main text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our AI Quote Builder will help identify the right calibration services for your specific industry and equipment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setQuoteBuilderOpen(true)}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-lg font-semibold transition-colors bg-white text-primary hover:bg-primary/10 hover:text-primary px-10 py-5 h-auto shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                <Sparkles className="w-5 h-5" />
                Open Quote Builder
              </button>
              <a
                href="#portal"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-lg font-semibold transition-colors border border-white/30 text-white bg-transparent hover:bg-white/10 hover:text-white px-10 py-5 h-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 disabled:pointer-events-none disabled:opacity-50"
              >
                <ExternalLink className="w-5 h-5" />
                Customer Portal
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <QuoteBuilder 
        isOpen={quoteBuilderOpen} 
        onClose={() => setQuoteBuilderOpen(false)} 
      />
    </div>
  )
}
