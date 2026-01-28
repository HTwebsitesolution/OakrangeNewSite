'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Menu, X, ChevronDown, ChevronRight, Phone, Mail, MapPin, 
  Shield, Award, Clock, CheckCircle2, ArrowRight, Star, 
  Gauge, Thermometer, Ruler, Scale, Zap, Building2, Factory,
  Pill, Plane, FlaskConical, Cog, Quote, Plus, Minus,
  FileCheck, Users, Target, Calculator, Send, ExternalLink,
  Wrench, Tractor, HardHat, PlaneTakeoff, Upload,
  ClipboardList, Truck, ListChecks, FileText, Sparkles, Calendar
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
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
        src="/brand/oakrange-logo.png"
        alt="Oakrange Engineering Ltd"
        width={220}
        height={60}
        priority
        className="h-10 w-auto"
      />
    </Link>
  )
}

// ==================== UTILITY BAR ====================
const UtilityBar = () => {
  return (
    <div className="bg-slate-900 text-slate-300 text-sm">
      <div className="container-main flex items-center justify-between py-2">
        <div className="flex items-center gap-6">
          <a href="tel:+441onal234567890" className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">+44 1onal 234 567890</span>
          </a>
          <a href="mailto:info@oakrange.co.uk" className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail className="w-4 h-4" />
            <span className="hidden md:inline">info@oakrange.co.uk</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 hover:text-white transition-colors px-3 py-1 rounded hover:bg-slate-800">
            <FileCheck className="w-4 h-4" />
            <span>Verify Certificate</span>
          </button>
          <button className="flex items-center gap-2 hover:text-white transition-colors px-3 py-1 rounded hover:bg-slate-800">
            <ExternalLink className="w-4 h-4" />
            <span className="hidden sm:inline">Customer Portal</span>
          </button>
        </div>
      </div>
    </div>
  )
}

// ==================== NAVIGATION ====================
const Navigation = ({ onQuoteClick }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Services', href: '/services' },
    { label: 'Industries', href: '/industries' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-card' 
        : 'bg-white'
    }`}>
      <div className="container-main">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <BrandLogo />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-600 hover:text-primary font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              onClick={onQuoteClick}
              className="btn-primary flex items-center gap-2"
            >
              <Calculator className="w-4 h-4" />
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
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-3 text-slate-600 hover:text-primary hover:bg-slate-50 rounded-lg font-medium transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4 pt-4 border-t border-slate-100 mt-2">
                <Button 
                  onClick={() => {
                    setMobileMenuOpen(false)
                    onQuoteClick()
                  }}
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  <Calculator className="w-4 h-4" />
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

// ==================== HERO SECTION ====================
const HeroSection = ({ onQuoteClick }) => {
  return (
    <section className="gradient-hero section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231E40AF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container-main relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 badge-primary mb-6 animate-fade-in">
            <Shield className="w-4 h-4" />
            <span>UKAS Accredited Calibration Laboratory</span>
          </div>

          {/* Headline */}
          <h1 className="mb-6 animate-fade-in animation-delay-100 text-balance">
            Onsite Calibration Across the UK —{' '}
            <span className="text-primary">audit-ready results, minimal downtime.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto animate-fade-in animation-delay-200 text-balance">
            From <strong className="text-slate-800">automotive workshops</strong> and <strong className="text-slate-800">tractor dealerships</strong> to{' '}
            <strong className="text-slate-800">construction yards</strong> and <strong className="text-slate-800">airfields</strong> — we calibrate your 
            torque wrenches, pressure gauges, and test equipment on your premises. 
            Certificates uploaded directly to your <span className="text-primary font-semibold">online portal</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in animation-delay-300">
            <Button 
              onClick={onQuoteClick}
              size="lg"
              className="btn-primary text-lg px-8 py-4 h-auto"
            >
              <Calculator className="w-5 h-5 mr-2" />
              Request a Quote
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="btn-secondary text-lg px-8 py-4 h-auto"
              asChild
            >
              <a href="#verify">
                <FileCheck className="w-5 h-5 mr-2" />
                Verify Certificate
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10 mt-12 pt-8 border-t border-slate-200 animate-fade-in animation-delay-400">
            <div className="flex items-center gap-2 text-slate-600">
              <Award className="w-5 h-5 text-amber-600" />
              <span className="font-medium">40+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-medium">Nationwide Coverage</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Clock className="w-5 h-5 text-emerald-600" />
              <span className="font-medium">Fast Turnaround</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <ExternalLink className="w-5 h-5 text-purple-600" />
              <span className="font-medium">Portal Access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ==================== CREDIBILITY STRIP ====================
const CredibilityStrip = () => {
  const credentials = [
    { 
      icon: Award,
      stat: '40+', 
      label: 'Years Experience',
      description: 'Trusted since 1984'
    },
    { 
      icon: MapPin,
      stat: 'UK-Wide', 
      label: 'Onsite Coverage',
      description: 'We come to you'
    },
    { 
      icon: FileCheck,
      stat: '24/7', 
      label: 'Portal Access',
      description: 'Certificates online'
    },
    { 
      icon: Zap,
      stat: '48hr', 
      label: 'Fast Turnaround',
      description: 'Rapid certification'
    },
  ]

  return (
    <section className="bg-slate-900 py-12">
      <div className="container-main">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {credentials.map((cred, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/20 rounded-xl mb-4 group-hover:bg-primary/30 transition-colors">
                <cred.icon className="w-7 h-7 text-primary/70" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{cred.stat}</div>
              <div className="font-semibold text-white text-sm mb-1">{cred.label}</div>
              <div className="text-xs text-slate-400">{cred.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ==================== SERVICE CARDS ====================
const ServicesSection = () => {
  const services = [
    {
      icon: Thermometer,
      title: 'Temperature Calibration',
      description: 'Thermometers, thermocouples, RTDs, data loggers, and temperature chambers calibrated to traceable standards.',
      features: ['Traceable to NPL', '-200°C to +1600°C range', 'Onsite or laboratory'],
    },
    {
      icon: Gauge,
      title: 'Pressure Calibration',
      description: 'Pressure gauges, transmitters, and test equipment calibrated across the full pressure range.',
      features: ['Vacuum to 10,000 bar', 'Dead-weight testers', 'Digital pressure standards'],
    },
    {
      icon: Ruler,
      title: 'Dimensional Calibration',
      description: 'Micrometers, calipers, gauge blocks, CMMs, and other dimensional instruments.',
      features: ['Sub-micron accuracy', 'CMM verification', 'Gauge block calibration'],
    },
    {
      icon: Scale,
      title: 'Mass Calibration',
      description: 'Balances, scales, and mass standards from milligrams to tonnes.',
      features: ['OIML weights', 'Analytical balances', 'Industrial scales'],
    },
    {
      icon: Zap,
      title: 'Electrical Calibration',
      description: 'Multimeters, clamp meters, insulation testers, PAT testers, and electrical standards.',
      features: ['DC to 100 kHz', 'High voltage', 'Resistance standards'],
    },
    {
      icon: Cog,
      title: 'Torque Calibration',
      description: 'Torque wrenches, transducers, and screwdrivers calibrated to international standards.',
      features: ['0.1 Nm to 20,000 Nm', 'Both directions', 'BS EN ISO 6789'],
    },
  ]

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="accent-line mx-auto mb-4" />
          <h2 className="mb-4">Calibration Services</h2>
          <p className="text-lg text-slate-600">
            Comprehensive calibration capabilities covering all major measurement disciplines, 
            delivered by expert engineers at your location.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="card-hover border-slate-200 group cursor-pointer"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-slate-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <a 
                    href="#" 
                    className="inline-flex items-center text-primary font-medium text-sm hover:text-primary group/link"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// ==================== INDUSTRY CARDS ====================
const IndustriesSection = () => {
  const industries = [
    {
      icon: Wrench,
      title: 'Automotive Workshops',
      description: 'MOT stations, garages, and dealerships. Torque wrenches, tyre gauges, and diagnostic equipment calibrated onsite.',
      items: ['Torque wrenches', 'Tyre pressure gauges', 'Diagnostic tools'],
    },
    {
      icon: Tractor,
      title: 'Tractor & Agriculture',
      description: 'Agricultural dealers and farm workshops. Keep your service equipment compliant and accurate.',
      items: ['Hydraulic gauges', 'Torque equipment', 'Pressure testers'],
    },
    {
      icon: HardHat,
      title: 'Construction Workshops',
      description: 'Plant hire, construction depots, and heavy equipment service centres across the UK.',
      items: ['Lifting equipment', 'Pressure systems', 'Torque tools'],
    },
    {
      icon: PlaneTakeoff,
      title: 'Airfields & Aviation',
      description: 'GA airfields, maintenance hangars, and aviation facilities. Precision calibration to aviation standards.',
      items: ['Pressure instruments', 'Torque wrenches', 'Test equipment'],
    },
  ]

  return (
    <section id="industries" className="section-padding bg-slate-50">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="accent-line mx-auto mb-4" />
          <h2 className="mb-4">Industries We Serve</h2>
          <p className="text-lg text-slate-600">
            Specialist calibration for workshops, dealerships, and airfields. 
            We understand your equipment and compliance requirements.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl border border-slate-200 card-hover group"
            >
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <industry.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {industry.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {industry.items.map((item, idx) => (
                      <span 
                        key={idx} 
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ==================== PROCESS TIMELINE ====================
const ProcessSection = () => {
  const steps = [
    {
      step: '01',
      title: 'Send Equipment List',
      description: 'Email or upload your instrument list. Include makes, models, and quantities — we\'ll handle the rest.',
      icon: ClipboardList,
    },
    {
      step: '02',
      title: 'We Visit Onsite',
      description: 'Our engineers arrive at your workshop or airfield with all necessary reference standards and equipment.',
      icon: Truck,
    },
    {
      step: '03',
      title: 'Certificates to Portal',
      description: 'UKAS certificates uploaded directly to your secure portal within 48 hours. Download anytime, audit-ready.',
      icon: Upload,
    },
  ]

  return (
    <section id="process" className="section-padding bg-white">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="accent-line mx-auto mb-4" />
          <h2 className="mb-4">How It Works</h2>
          <p className="text-lg text-slate-600">
            Simple, efficient, and designed to minimise your downtime. Here's how we deliver audit-ready calibration.
          </p>
        </div>

        {/* Timeline - Horizontal on desktop */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connection Line - Desktop */}
          <div className="hidden md:block absolute top-16 left-[15%] right-[15%] h-1 bg-gradient-to-r from-primary/30 via-primary/60 to-primary rounded-full" />
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                {/* Step Number Circle */}
                <div className="relative z-10 mx-auto mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary/90 rounded-2xl flex flex-col items-center justify-center text-white shadow-elevated mx-auto transform hover:scale-105 transition-transform">
                    <step.icon className="w-10 h-10 mb-2" />
                    <span className="text-2xl font-bold">{step.step}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>

                {/* Arrow - Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 -right-6 z-20">
                    <ChevronRight className="w-8 h-8 text-primary/70" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Portal CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/30 rounded-xl px-6 py-4">
            <FileCheck className="w-6 h-6 text-primary" />
            <div className="text-left">
              <p className="font-semibold text-slate-900">Already a customer?</p>
              <p className="text-sm text-slate-600">Access your certificates in the Customer Portal</p>
            </div>
            <Button variant="outline" size="sm" className="ml-4 border-primary/40 text-primary hover:bg-primary/20">
              <ExternalLink className="w-4 h-4 mr-2" />
              Open Portal
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

// ==================== AI QUOTE BUILDER PREVIEW ====================
const AIQuoteBuilderPreview = ({ onQuoteClick }) => {
  const collectItems = [
    { icon: ClipboardList, label: 'Equipment types & quantities' },
    { icon: MapPin, label: 'Your location (postcode)' },
    { icon: Clock, label: 'Preferred schedule' },
    { icon: Users, label: 'Contact details' },
  ]

  const receiveItems = [
    { icon: FileText, label: 'Itemised quote within 24 hours' },
    { icon: Calendar, label: 'Available visit dates' },
    { icon: CheckCircle2, label: 'Scope of calibration work' },
    { icon: Calculator, label: 'Clear, transparent pricing' },
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 to-slate-50">
      <div className="container-main">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 badge-primary mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Smart Quote System</span>
            </div>
            <h2 className="mb-4">Get Your Quote in Minutes</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our AI-powered quote builder collects the right information and delivers a detailed quote to your inbox — no phone calls required.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* What We Collect */}
            <div className="bg-white rounded-2xl p-8 shadow-card border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                  <ListChecks className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">What We Ask</h3>
              </div>
              <ul className="space-y-4">
                {collectItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-slate-600" />
                    </div>
                    <span className="text-slate-700">{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What You Receive */}
            <div className="bg-primary rounded-2xl p-8 shadow-elevated text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <FileCheck className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">What You Receive</h3>
              </div>
              <ul className="space-y-4">
                {receiveItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white">{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <Button 
              onClick={onQuoteClick}
              size="lg"
              className="btn-primary text-lg px-10 py-5 h-auto shadow-elevated"
            >
              <Calculator className="w-5 h-5 mr-2" />
              Start Your Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <p className="text-sm text-slate-500 mt-4">No obligation • Response within 24 hours</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ==================== TESTIMONIALS ====================
const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Oakrange has been calibrating our workshop's torque wrenches for over 5 years. The onsite service means zero downtime — the lads can keep working while calibration happens in the background.",
      author: "Mike Patterson",
      role: "Workshop Manager",
      company: "Patterson's Garage, Birmingham",
      rating: 5,
    },
    {
      quote: "As an airfield, we need absolute precision. Their aviation-standard calibration and the online portal where we can pull certificates for audits has been a game-changer.",
      author: "Rachel Edwards",
      role: "Maintenance Director",
      company: "Gloucestershire Airfield",
      rating: 5,
    },
    {
      quote: "We run three tractor dealerships and they handle all our calibration in scheduled visits. Professional, reliable, and the portal makes audit prep simple.",
      author: "David Thornton",
      role: "Service Manager",
      company: "Thornton Agricultural Ltd",
      rating: 5,
    },
  ]

  return (
    <section id="about" className="section-padding bg-slate-900">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="accent-line mx-auto mb-4" />
          <h2 className="mb-4 text-white">Trusted by Industry Leaders</h2>
          <p className="text-lg text-slate-400">
            See what our clients say about our calibration services.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:bg-slate-800 transition-colors"
            >
              <CardContent className="pt-6">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/80/30" />
                  <p className="text-slate-300 leading-relaxed pl-4">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-700">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-sm text-slate-400">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// ==================== FAQ ACCORDION ====================
const FAQSection = () => {
  const faqs = [
    {
      question: 'What is UKAS accreditation and why does it matter?',
      answer: 'UKAS (United Kingdom Accreditation Service) is the national accreditation body recognised by the UK government. UKAS accreditation ensures that our calibration services meet ISO/IEC 17025 requirements, providing internationally recognised traceability and measurement competence. This is often a regulatory requirement for quality management systems.',
    },
    {
      question: 'How long does onsite calibration typically take?',
      answer: 'The duration depends on the quantity and type of instruments. Typically, a small batch (10-20 instruments) can be completed in a single day. We work with you to schedule visits that minimise disruption to your operations, and can arrange out-of-hours service if required.',
    },
    {
      question: 'What areas of the UK do you cover?',
      answer: 'We provide nationwide coverage across the UK, with engineering teams based strategically to minimise travel time and costs. Our main hubs are in the Midlands, South East, and North West, allowing us to reach most locations within 24-48 hours.',
    },
    {
      question: 'How do I verify the authenticity of my calibration certificate?',
      answer: 'Every certificate we issue includes a unique reference number that can be verified through our online portal or by contacting our quality department directly. We maintain records for a minimum of 10 years in accordance with our accreditation requirements.',
    },
    {
      question: 'Can you calibrate equipment from any manufacturer?',
      answer: 'Yes, we calibrate instruments from all major manufacturers regardless of make or model. If you have specialist or unusual equipment, please contact us to confirm our capabilities and discuss any specific requirements.',
    },
    {
      question: 'What happens if my instrument fails calibration?',
      answer: 'If an instrument falls outside its specified tolerance, we will document the "as found" condition and can often perform adjustment to bring it back within specification. We\'ll always discuss options with you before proceeding, and provide clear documentation of any adjustments made.',
    },
  ]

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-main">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left Column - Header */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-32">
              <div className="accent-line mb-4" />
              <h2 className="mb-4">Frequently Asked Questions</h2>
              <p className="text-slate-600 mb-6">
                Find answers to common questions about our calibration services. 
                Can't find what you're looking for?
              </p>
              <Button variant="outline" className="btn-secondary" asChild>
                <a href="#contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Us
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div className="lg:col-span-3">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-slate-50 rounded-xl border border-slate-200 px-6 data-[state=open]:bg-white data-[state=open]:shadow-card transition-all"
                >
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-primary py-5 [&[data-state=open]>svg]:rotate-180">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

// ==================== CTA BAND ====================
const CTABand = ({ onQuoteClick }) => {
  return (
    <section className="gradient-cta py-16">
      <div className="container-main">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-white mb-2 text-3xl md:text-4xl">Ready to Get Started?</h2>
            <p className="text-white/90 text-lg">
              Get a quote for your workshop or airfield calibration needs — or access your certificates now.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onQuoteClick}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-lg font-semibold transition-colors bg-white text-primary hover:bg-primary/10 hover:text-primary px-8 py-4 h-auto shadow-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
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
      </div>
    </section>
  )
}

// ==================== QUOTE BUILDER SLIDE-OVER ====================
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
    // Handle form submission
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
                  <SelectItem value="temperature">Temperature Calibration</SelectItem>
                  <SelectItem value="pressure">Pressure Calibration</SelectItem>
                  <SelectItem value="dimensional">Dimensional Calibration</SelectItem>
                  <SelectItem value="mass">Mass Calibration</SelectItem>
                  <SelectItem value="electrical">Electrical Calibration</SelectItem>
                  <SelectItem value="torque">Torque Calibration</SelectItem>
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
                <Label htmlFor="location">Location</Label>
                <Select 
                  value={formData.location} 
                  onValueChange={(value) => handleChange('location', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="onsite">Onsite Service</SelectItem>
                    <SelectItem value="laboratory">Laboratory</SelectItem>
                    <SelectItem value="either">Either</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Additional Details</Label>
              <Textarea
                id="message"
                placeholder="Tell us about your instruments, any specific requirements, or questions..."
                rows={4}
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
              />
            </div>
          </div>

          {/* Submit */}
          <div className="pt-4 border-t border-slate-200">
            <Button type="submit" className="btn-primary w-full text-lg py-6">
              <Send className="w-5 h-5 mr-2" />
              Submit Quote Request
            </Button>
            <p className="text-xs text-slate-500 text-center mt-4">
              We typically respond within 24 hours. For urgent enquiries, please call us.
            </p>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  )
}

// ==================== FOOTER ====================
const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { label: 'Temperature Calibration', href: '#' },
      { label: 'Pressure Calibration', href: '#' },
      { label: 'Dimensional Calibration', href: '#' },
      { label: 'Mass Calibration', href: '#' },
      { label: 'Electrical Calibration', href: '#' },
      { label: 'Torque Calibration', href: '#' },
    ],
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Process', href: '#process' },
      { label: 'Industries', href: '#industries' },
      { label: 'Careers', href: '#' },
      { label: 'News & Updates', href: '#' },
    ],
    support: [
      { label: 'Contact Us', href: '#contact' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Verify Certificate', href: '#' },
      { label: 'Customer Portal', href: '#' },
      { label: 'Request Callback', href: '#' },
    ],
  }

  return (
    <footer id="contact" className="bg-slate-900 text-slate-300">
      {/* Main Footer */}
      <div className="container-main section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Gauge className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-bold text-lg text-white block leading-tight">Oakrange</span>
                <span className="text-xs text-slate-500 leading-tight">Engineering</span>
              </div>
            </div>
            <p className="text-slate-400 mb-6 max-w-sm">
              UKAS accredited calibration laboratory providing precision measurement services across the UK since 1998.
            </p>
            <div className="space-y-3">
              <a href="tel:+441234567890" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="w-5 h-5 text-primary/80" />
                <span>+44 (0) 1234 567890</span>
              </a>
              <a href="mailto:info@oakrange.co.uk" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail className="w-5 h-5 text-primary/80" />
                <span>info@oakrange.co.uk</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary/80 flex-shrink-0 mt-0.5" />
                <span>
                  Oakrange Engineering Ltd<br />
                  Unit 7, Innovation Park<br />
                  Birmingham, B1 1AA
                </span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container-main py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              © {currentYear} Oakrange Engineering Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-slate-500 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ==================== MAIN APP ====================
export default function App() {
  const [quoteBuilderOpen, setQuoteBuilderOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Utility Bar */}
      <UtilityBar />

      {/* Navigation */}
      <Navigation onQuoteClick={() => setQuoteBuilderOpen(true)} />

      {/* Main Content */}
      <main>
        <HeroSection onQuoteClick={() => setQuoteBuilderOpen(true)} />
        <CredibilityStrip />
        <ServicesSection />
        <IndustriesSection />
        <ProcessSection />
        <AIQuoteBuilderPreview onQuoteClick={() => setQuoteBuilderOpen(true)} />
        <TestimonialsSection />
        <FAQSection />
        <CTABand onQuoteClick={() => setQuoteBuilderOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Quote Builder Slide-Over */}
      <QuoteBuilder 
        isOpen={quoteBuilderOpen} 
        onClose={() => setQuoteBuilderOpen(false)} 
      />
    </div>
  )
}