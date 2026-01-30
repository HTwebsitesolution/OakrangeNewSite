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
  ClipboardList, Truck, ListChecks, FileText, Sparkles, Calendar,
  ArrowUp
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import FloatingLines from '@/components/FloatingLines'
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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

// ==================== BRAND LOGO ====================
const BrandLogo = ({ variant = 'default' }) => {
  const isDark = variant === 'dark'
  return (
    <Link href="/" className={`flex items-center gap-3 ${isDark ? '' : 'pt-1'}`}>
      <Image
        src="/Oakrange Engineering 3D Logo.png"
        alt="Oakrange Engineering Ltd"
        width={220}
        height={60}
        priority
        className={`${isDark ? "h-10 w-auto" : "h-[50px] w-auto"} logo-animated logo-hover-effect logo-color-adjust`}
      />
    </Link>
  )
}

// ==================== UTILITY BAR ====================
const UtilityBar = () => {
  return (
    <div className="bg-slate-900 text-slate-300 text-sm relative">
      <div className="container-main flex items-center justify-between py-2 relative">
        <div className="flex items-center gap-6 z-10">
          <a href="tel:01709542334" className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">01709 542334</span>
          </a>
          <a href="mailto:info@oakrange.co.uk" className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail className="w-4 h-4" />
            <span className="hidden md:inline">info@oakrange.co.uk</span>
          </a>
        </div>
        
        {/* Logo in center with full-height white background */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 bg-white flex items-center justify-center px-4 min-w-[180px] max-w-[220px] z-20">
          <BrandLogo variant="dark" />
        </div>
        
        <div className="flex items-center gap-4 z-10 ml-auto">
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
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const servicesMenu = [
    { label: 'Torque Calibration', href: '/services#torque', icon: Gauge, desc: 'Wrenches, multipliers, testers' },
    { label: 'Pressure Calibration', href: '/services#pressure', icon: Gauge, desc: 'Gauges, transducers, sensors' },
    { label: 'Temperature Calibration', href: '/services#temperature', icon: Thermometer, desc: 'Thermometers, probes, ovens' },
    { label: 'Dimensional Calibration', href: '/services#dimensional', icon: Ruler, desc: 'Calipers, micrometers, gauges' },
    { label: 'Mass Calibration', href: '/services#mass', icon: Scale, desc: 'Scales, weights, balances' },
    { label: 'Electrical Calibration', href: '/services#electrical', icon: Zap, desc: 'Multimeters, clamp meters' },
  ]

  const industriesMenu = [
    { label: 'Automotive', href: '/industries#automotive', icon: Wrench, desc: 'Workshops & dealerships' },
    { label: 'Agriculture', href: '/industries#agriculture', icon: Tractor, desc: 'Farm equipment & machinery' },
    { label: 'Construction', href: '/industries#construction', icon: HardHat, desc: 'Site equipment & tools' },
    { label: 'Aviation', href: '/industries#aviation', icon: PlaneTakeoff, desc: 'Aircraft maintenance' },
    { label: 'Manufacturing', href: '/industries#manufacturing', icon: Factory, desc: 'Production facilities' },
    { label: 'Pharmaceutical', href: '/industries#pharmaceutical', icon: Pill, desc: 'Lab equipment & compliance' },
  ]

  const navLinks = [
    { label: 'Services', href: '/services', hasDropdown: true, menu: servicesMenu },
    { label: 'Industries', href: '/industries', hasDropdown: true, menu: industriesMenu },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-white'
    }`}>
      <div className="container-main">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={link.href}
                  className="text-slate-700 hover:text-primary font-semibold text-[15px] tracking-wide transition-all duration-300 relative group flex items-center gap-1.5 px-3 py-2"
                >
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openDropdown === link.label ? 'rotate-180' : ''}`} />
                  )}
                  <span className="absolute -bottom-1 left-3 right-3 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
                
                {/* Premium Bubble Dropdown */}
                {link.hasDropdown && openDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-3 w-[520px] bg-white rounded-2xl shadow-2xl border border-slate-200/50 backdrop-blur-xl overflow-hidden animate-fade-in-up z-50">
                    {/* Arrow pointer */}
                    <div className="absolute -top-2 left-8 w-4 h-4 bg-white border-l border-t border-slate-200/50 rotate-45"></div>
                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-4">
                        {link.menu.map((item, idx) => {
                          const Icon = item.icon
                          return (
                            <a
                              key={idx}
                              href={item.href}
                              className="group flex items-start gap-3 p-4 rounded-xl hover:bg-gradient-to-br hover:from-slate-50 hover:to-white transition-all duration-300 hover:shadow-md border border-transparent hover:border-slate-200"
                            >
                              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-slate-100 to-slate-50 group-hover:from-primary/10 group-hover:to-primary/5 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110">
                                <Icon className="w-5 h-5 text-slate-700 group-hover:text-primary transition-colors" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="font-semibold text-slate-900 group-hover:text-primary transition-colors text-sm mb-1">
                                  {item.label}
                                </div>
                                <div className="text-xs text-slate-500 line-clamp-1">
                                  {item.desc}
                                </div>
                              </div>
                              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                            </a>
                          )
                        })}
                      </div>
                    </div>
                    <div className="px-6 py-4 bg-gradient-to-r from-slate-50 to-white border-t border-slate-100">
                      <a
                        href={link.href}
                        className="flex items-center justify-between group"
                      >
                        <span className="text-sm font-semibold text-slate-900 group-hover:text-primary transition-colors">
                          View all {link.label.toLowerCase()}
                        </span>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
            {/* CTA Button */}
            <Button 
              onClick={onQuoteClick}
              className="ml-2 bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 border-0"
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
                <div key={link.label}>
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setMobileDropdownOpen(mobileDropdownOpen === link.label ? null : link.label)}
                        className="w-full px-4 py-3 text-slate-600 hover:text-primary hover:bg-slate-50 rounded-xl font-semibold transition-colors flex items-center justify-between"
                      >
                        <span>{link.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileDropdownOpen === link.label ? 'rotate-180' : ''}`} />
                      </button>
                      {mobileDropdownOpen === link.label && (
                        <div className="ml-4 mt-2 mb-2 space-y-1 border-l-2 border-slate-200 pl-4">
                          {link.menu.map((item, idx) => {
                            const Icon = item.icon
                            return (
                              <a
                                key={idx}
                                href={item.href}
                                className="flex items-center gap-3 px-4 py-2.5 text-slate-600 hover:text-primary hover:bg-slate-50 rounded-lg font-medium transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                <Icon className="w-4 h-4" />
                                <span className="text-sm">{item.label}</span>
                              </a>
                            )
                          })}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={link.href}
                      className="px-4 py-3 text-slate-600 hover:text-primary hover:bg-slate-50 rounded-xl font-semibold transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  )}
                </div>
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
  const [api, setApi] = useState(null)
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const heroSlides = [
    {
      title: "UKAS-Accredited Precision",
      description: "Every calibration performed to UKAS-accredited standards with full traceability to national standards.",
      icon: Shield,
      gradient: "from-blue-600 to-blue-800",
      image: "/images/hero-tech-calibration.png",
    },
    {
      title: "Onsite Calibration Excellence",
      description: "Our mobile calibration units come directly to your facility, minimising downtime and keeping operations running.",
      icon: Clock,
      gradient: "from-emerald-600 to-emerald-800",
      image: "/images/onsite-calibration.png",
    },
    {
      title: "Digital-First Certificates",
      description: "Receive calibration certificates within 48 hours, uploaded directly to your secure online portal.",
      icon: FileCheck,
      gradient: "from-slate-700 to-slate-900",
      image: "/images/lab-calibration.png",
    },
    {
      title: "Expert Engineering Team",
      description: "40+ years of experience across all measurement disciplines, ensuring your equipment meets the highest standards.",
      icon: Award,
      gradient: "from-primary to-primary/90",
      image: "/images/hero-tech-calibration.png",
    },
  ]

  useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  // Auto-advance slider
  useEffect(() => {
    if (!api || isPaused) return

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext()
      } else {
        api.scrollTo(0) // Loop back to start
      }
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [api, isPaused])

  return (
    <section className="bg-white pt-24 pb-20 md:pt-32 md:pb-28 lg:pt-36 lg:pb-32 relative overflow-hidden">
      {/* Floating Lines Background */}
      <div className="absolute inset-0 w-full h-full opacity-30 pointer-events-none z-0" style={{ minHeight: '600px' }}>
        <FloatingLines 
          enabledWaves={["top","middle","bottom"]}
          lineCount={5}
          lineDistance={5}
          bendRadius={5}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
        />
      </div>
      <div className="container-main relative animate-fade-in-up z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium text-slate-700">
              <Shield className="w-4 h-4 text-slate-600" />
              <span>UKAS Accredited Calibration Laboratory</span>
            </div>

            {/* Headline - Reduced red usage */}
            <h1 className="max-w-3xl text-4xl md:text-[2.9rem] lg:text-[3.1rem] xl:text-[3.4rem] font-bold text-slate-900 leading-tight tracking-tight">
              <span className="inline-block lg:whitespace-nowrap">
                Onsite <span className="text-primary">Calibration</span> Across the UK —
              </span>{' '}
              <span className="block lg:inline text-slate-900">
                audit-ready results, minimal downtime.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl">
              From <strong className="text-slate-900">automotive workshops</strong> and <strong className="text-slate-900">tractor dealerships</strong> to{' '}
              <strong className="text-slate-900">construction yards</strong> and <strong className="text-slate-900">airfields</strong> — we calibrate your 
              torque wrenches, pressure gauges, and test equipment on your premises. 
              Certificates uploaded directly to your <strong className="text-slate-900">online portal</strong>.
            </p>

            {/* Proof Bullets */}
            <div className="space-y-3 pt-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">UKAS-accredited certificates with full traceability</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Onsite service minimises downtime — we come to you</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">24/7 portal access for audit-ready certificate retrieval</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
              <Button 
                onClick={onQuoteClick}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-semibold text-lg px-8 py-4 h-auto shadow-lg hover:shadow-xl transition-all"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Request a Quote
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-400 font-semibold text-lg px-8 py-4 h-auto transition-all duration-200"
                asChild
              >
                <a href="#verify">
                  <FileCheck className="w-5 h-5 mr-2" />
                  Verify Certificate
                </a>
              </Button>
            </div>
          </div>

          {/* Right Slider */}
          <div 
            className="relative lg:pl-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
                duration: 30,
              }}
              className="w-full"
            >
              <CarouselContent>
                {heroSlides.map((slide, index) => {
                  const Icon = slide.icon
                  return (
                    <CarouselItem key={index}>
                      <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-[0_20px_60px_rgba(2,6,23,0.12)] bg-slate-100 aspect-[4/3] image-hover-subtle group">
                        {/* Image */}
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        
                        {/* Gradient overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-tr ${slide.gradient} opacity-60 group-hover:opacity-70 transition-opacity duration-500`} />
                        
                        {/* Content overlay */}
                        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10 text-white">
                          <div className="relative z-10">
                            {/* Icon */}
                            <div className={`w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500`}>
                              <Icon className="w-7 h-7 text-white" />
                            </div>
                            
                            {/* Title */}
                            <h3 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                              {slide.title}
                            </h3>
                            
                            {/* Description */}
                            <p className="text-white/90 text-base md:text-lg leading-relaxed">
                              {slide.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  )
                })}
              </CarouselContent>

              {/* Dots Indicator */}
              <div className="flex items-center justify-center gap-2 mt-6">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      current === index
                        ? 'w-8 bg-primary'
                        : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </Carousel>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-slate-600" />
              </div>
              <div>
                <div className="font-semibold text-slate-900 text-sm">UKAS Accredited</div>
                <div className="text-xs text-slate-500">ISO/IEC 17025</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-slate-600" />
              </div>
              <div>
                <div className="font-semibold text-slate-900 text-sm">UK-Wide Onsite</div>
                <div className="text-xs text-slate-500">Nationwide coverage</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-slate-600" />
              </div>
              <div>
                <div className="font-semibold text-slate-900 text-sm">Certificates in 48h</div>
                <div className="text-xs text-slate-500">Fast turnaround</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                <FileCheck className="w-6 h-6 text-slate-600" />
              </div>
              <div>
                <div className="font-semibold text-slate-900 text-sm">24/7 Portal Access</div>
                <div className="text-xs text-slate-500">Audit-ready records</div>
              </div>
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
    <section className="bg-slate-900 py-16">
      <div className="container-main">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {credentials.map((cred, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-xl mb-5 group-hover:bg-white/15 transition-colors">
                <cred.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{cred.stat}</div>
              <div className="font-semibold text-white text-base mb-1">{cred.label}</div>
              <div className="text-sm text-slate-400">{cred.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ==================== PREMIUM SLIDER SECTION ====================
const PremiumSliderSection = () => {
  const [api, setApi] = useState(null)
  const [current, setCurrent] = useState(0)

  const slides = [
    {
      title: "UKAS-Accredited Precision",
      subtitle: "Industry-Leading Standards",
      description: "Every calibration is performed to UKAS-accredited standards with full traceability to national standards. Your equipment is calibrated by certified engineers using precision instruments.",
      icon: Shield,
      gradient: "from-blue-600 to-blue-800",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
    },
    {
      title: "Minimal Downtime",
      subtitle: "Onsite Calibration Excellence",
      description: "Our mobile calibration units come directly to your facility. No need to ship equipment or wait for returns. We calibrate on your premises, keeping your operations running smoothly.",
      icon: Clock,
      gradient: "from-emerald-600 to-emerald-800",
      bgColor: "bg-gradient-to-br from-emerald-50 to-emerald-100",
    },
    {
      title: "Digital-First Certificates",
      subtitle: "Instant Access & Compliance",
      description: "Receive your calibration certificates within 48 hours, uploaded directly to your secure online portal. Access audit-ready documentation 24/7, anytime, anywhere.",
      icon: FileCheck,
      gradient: "from-slate-700 to-slate-900",
      bgColor: "bg-gradient-to-br from-slate-50 to-slate-100",
    },
    {
      title: "Expert Engineering Team",
      subtitle: "40+ Years of Experience",
      description: "Our certified calibration engineers bring decades of expertise across all measurement disciplines. From torque wrenches to pressure gauges, we ensure your equipment meets the highest standards.",
      icon: Award,
      gradient: "from-primary to-primary/90",
      bgColor: "bg-gradient-to-br from-red-50 to-red-100",
    },
  ]

  useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap())
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
      
      <div className="container-main relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-sm font-semibold text-slate-700 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Why Choose Oakrange</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Premium Calibration Services
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Delivering precision, reliability, and excellence across the UK
          </p>
        </div>

        {/* Premium Carousel */}
        <div className="relative">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              duration: 30,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {slides.map((slide, index) => {
                const Icon = slide.icon
                return (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                    <div className={`relative h-full p-8 md:p-10 rounded-3xl ${slide.bgColor} border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 group`}>
                      {/* Gradient overlay on hover */}
                      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${slide.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                      
                      {/* Content */}
                      <div className="relative z-10">
                        {/* Icon */}
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${slide.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>

                        {/* Badge */}
                        <div className="inline-block px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-semibold text-slate-700 mb-4">
                          {slide.subtitle}
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight">
                          {slide.title}
                        </h3>

                        {/* Description */}
                        <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                          {slide.description}
                        </p>

                        {/* Decorative element */}
                        <div className={`mt-6 w-12 h-1 bg-gradient-to-r ${slide.gradient} rounded-full`}></div>
                      </div>

                      {/* Corner accent */}
                      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${slide.gradient} opacity-5 rounded-bl-full`}></div>
                    </div>
                  </CarouselItem>
                )
              })}
            </CarouselContent>

            {/* Custom Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-10">
              <CarouselPrevious className="relative -left-0 top-0 translate-y-0 h-12 w-12 rounded-full bg-white border-2 border-slate-200 shadow-lg hover:bg-slate-50 hover:border-primary transition-all duration-300 hover:scale-110" />
              
              {/* Dots Indicator */}
              <div className="flex items-center gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      current === index
                        ? 'w-8 bg-primary'
                        : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <CarouselNext className="relative -right-0 top-0 translate-y-0 h-12 w-12 rounded-full bg-white border-2 border-slate-200 shadow-lg hover:bg-slate-50 hover:border-primary transition-all duration-300 hover:scale-110" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}

// ==================== SERVICE CARDS ====================
const ServicesSection = () => {
  const flagshipServices = [
    {
      icon: Cog,
      title: 'Torque Calibration',
      description: 'Torque wrenches, transducers, and screwdrivers calibrated to international standards.',
      outcome: 'Reduce downtime',
      features: ['0.1 Nm to 20,000 Nm range', 'BS EN ISO 6789 compliant', 'Both clockwise and counter-clockwise'],
    },
    {
      icon: Gauge,
      title: 'Pressure Calibration',
      description: 'Pressure gauges, transmitters, and test equipment calibrated across the full pressure range.',
      outcome: 'Pass audits',
      features: ['Vacuum to 10,000 bar', 'Dead-weight testers', 'Digital pressure standards'],
    },
  ]

  const supportingServices = [
    {
      icon: Thermometer,
      title: 'Temperature Calibration',
      description: 'Thermometers, thermocouples, RTDs, data loggers, and temperature chambers.',
      outcome: 'Traceable results',
      features: ['Traceable to NPL', '-200°C to +1600°C range', 'Onsite or laboratory'],
    },
    {
      icon: Ruler,
      title: 'Dimensional Calibration',
      description: 'Micrometers, calipers, gauge blocks, CMMs, and other dimensional instruments.',
      outcome: 'Sub-micron accuracy',
      features: ['Sub-micron accuracy', 'CMM verification', 'Gauge block calibration'],
    },
    {
      icon: Scale,
      title: 'Mass Calibration',
      description: 'Balances, scales, and mass standards from milligrams to tonnes.',
      outcome: 'OIML compliant',
      features: ['OIML weights', 'Analytical balances', 'Industrial scales'],
    },
    {
      icon: Zap,
      title: 'Electrical Calibration',
      description: 'Multimeters, clamp meters, insulation testers, PAT testers, and electrical standards.',
      outcome: 'Full traceability',
      features: ['DC to 100 kHz', 'High voltage', 'Resistance standards'],
    },
  ]

  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="w-16 h-1 bg-slate-300 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Calibration Services</h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Comprehensive calibration capabilities covering all major measurement disciplines, 
            delivered by expert engineers at your location.
          </p>
        </div>

        {/* Flagship Services - 2 Large Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {flagshipServices.map((service, index) => (
            <Card 
              key={index} 
              className="border-2 border-slate-200 hover:border-slate-300 group transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-slate-200 transition-colors">
                  <service.icon className="w-8 h-8 text-slate-700" />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-2xl font-bold text-slate-900">
                    {service.title}
                  </CardTitle>
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                    {service.outcome}
                  </span>
                </div>
                <CardDescription className="text-base text-slate-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6 border-t border-slate-100">
                  <a 
                    href="#" 
                    className="inline-flex items-center text-slate-900 font-semibold text-sm hover:gap-3 transition-all group/link"
                  >
                    View scope
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Supporting Services - 4 Smaller Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportingServices.map((service, index) => {
            const isBlueCard = index === 1 || index === 3 // 2nd and 4th cards (Dimensional and Electrical)
            return (
              <Card 
                key={index} 
                className={`${
                  isBlueCard 
                    ? 'bg-slate-900 border-slate-800 hover:border-slate-700' 
                    : 'bg-white border border-slate-200 hover:border-slate-300'
                } group transition-all duration-300 shadow-sm hover:shadow-md`}
              >
                <CardHeader className="pb-3">
                  <div className={`w-12 h-12 ${
                    isBlueCard 
                      ? 'bg-white/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/15' 
                      : 'bg-slate-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-slate-200'
                  } transition-colors`}>
                    <service.icon className={`w-6 h-6 ${isBlueCard ? 'text-white' : 'text-slate-700'}`} />
                  </div>
                  <div className="mb-2">
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      isBlueCard 
                        ? 'text-emerald-400 bg-emerald-400/20' 
                        : 'text-emerald-600 bg-emerald-50'
                    }`}>
                      {service.outcome}
                    </span>
                  </div>
                  <CardTitle className={`text-lg font-bold mb-2 ${isBlueCard ? 'text-white' : 'text-slate-900'}`}>
                    {service.title}
                  </CardTitle>
                  <CardDescription className={`text-sm ${isBlueCard ? 'text-slate-300' : 'text-slate-600'}`}>
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className={`flex items-start gap-2 text-xs ${isBlueCard ? 'text-slate-300' : 'text-slate-600'}`}>
                        <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${isBlueCard ? 'text-emerald-400' : 'text-emerald-600'}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="#" 
                    className={`inline-flex items-center font-medium text-xs hover:gap-2 transition-all group/link ${
                      isBlueCard ? 'text-white hover:text-slate-200' : 'text-slate-900'
                    }`}
                  >
                    View scope
                    <ArrowRight className={`w-3 h-3 ml-1 group-hover/link:translate-x-1 transition-transform ${isBlueCard ? 'text-white' : 'text-slate-900'}`} />
                  </a>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ==================== ONSITE COVERAGE PROOF ====================
const OnsiteCoverageSection = () => {
  const bullets = [
    'Onsite service across the UK to minimise downtime',
    'Engineers arrive with certified reference standards',
    'Clear pass/fail results and adjustments logged',
    'Certificates uploaded to your online portal',
  ]

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-main animate-fade-in-up-slow">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image left */}
          <div className="relative image-hover-subtle">
            <div className="absolute -inset-4 bg-slate-200/40 blur-3xl rounded-[2rem] -z-10" aria-hidden="true" />
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-[0_20px_60px_rgba(2,6,23,0.12)] bg-slate-100 aspect-[4/3]">
              <img
                src="/images/onsite-calibration.png"
                alt="Engineer performing onsite calibration in an industrial facility"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/25 via-transparent to-white/10" />
              <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay bg-[url('/images/noise.png')]" />
            </div>
          </div>

          {/* Copy right */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              UK-Wide Onsite Calibration
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              From single workshops to multi-site fleets, our engineers visit your locations across the UK to calibrate
              equipment with minimal disruption to your operation.
            </p>
            <ul className="space-y-3">
              {bullets.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Button
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    const el = document.getElementById('request-quote')
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 h-auto shadow-lg hover:shadow-xl transition-all"
              >
                <Calculator className="w-4 h-4 mr-2" />
                Book onsite calibration
              </Button>
            </div>
          </div>
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
              className="bg-white p-8 rounded-xl border border-slate-200 card-hover group animate-fade-in-up"
            >
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-slate-200 transition-colors">
                  <industry.icon className="w-8 h-8 text-slate-700" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
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

// ==================== ACCREDITATION SECTION ====================
const AccreditationSection = () => {
  return (
    <section className="py-24 md:py-32 bg-slate-900 text-white">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="w-16 h-1 bg-white/20 mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Accreditation & Standards</h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Our UKAS accreditation demonstrates our commitment to precision, traceability, and quality assurance.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-white mb-1">UKAS Accredited</h3>
                  <p className="text-slate-300">United Kingdom Accreditation Service recognition for calibration competence</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-white mb-1">ISO/IEC 17025 Compliant</h3>
                  <p className="text-slate-300">International standard for testing and calibration laboratories</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-white mb-1">Full Traceability</h3>
                  <p className="text-slate-300">All measurements traceable to national standards (NPL) with documented uncertainty</p>
                </div>
              </div>
            </div>
          </div>
          {/* Image right */}
          <div className="relative">
            <div className="absolute -inset-4 bg-slate-700/60 blur-3xl rounded-[2rem] -z-10" aria-hidden="true" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_24px_80px_rgba(15,23,42,0.65)] bg-slate-800 aspect-[4/3]">
              <img
                src="/images/lab-calibration.png"
                alt="Laboratory calibration environment with UKAS-aligned procedures"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/50 via-transparent to-slate-200/10" />
              <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay bg-[url('/images/noise.png')]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ==================== CASE STUDIES SECTION ====================
const CaseStudiesSection = () => {
  const caseStudies = [
    {
      title: 'Automotive Workshop Chain',
      challenge: '15 locations requiring quarterly torque wrench calibration',
      solution: 'Scheduled onsite visits across all sites',
      result: 'Zero downtime, audit-ready certificates, 48h portal access',
      metric: '15 sites',
      metricLabel: 'calibrated quarterly',
    },
    {
      title: 'General Aviation Airfield',
      challenge: 'CAA audit deadline approaching, certificates missing',
      solution: 'Priority onsite calibration + portal setup',
      result: 'Audit passed, all certificates accessible 24/7',
      metric: '48 hours',
      metricLabel: 'from request to certificates',
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-main">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="w-16 h-1 bg-slate-300 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Case Studies</h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            See how we've helped businesses maintain compliance and reduce downtime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="bg-slate-50 rounded-2xl p-8 lg:p-10 border border-slate-200 hover:border-slate-300 transition-all"
            >
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-2xl font-bold text-slate-900">{study.title}</h3>
                <div className="text-right">
                  <div className="text-3xl font-bold text-slate-900">{study.metric}</div>
                  <div className="text-sm text-slate-600">{study.metricLabel}</div>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-semibold text-slate-700 mb-1">Challenge</div>
                  <p className="text-slate-600">{study.challenge}</p>
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-700 mb-1">Solution</div>
                  <p className="text-slate-600">{study.solution}</p>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <div className="text-sm font-semibold text-emerald-700 mb-1">Result</div>
                  <p className="text-slate-700 font-medium">{study.result}</p>
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
      title: 'Book & Scope Equipment',
      description: 'Email or upload your instrument list. Include makes, models, and quantities — we\'ll handle the rest.',
      icon: ClipboardList,
    },
    {
      step: '02',
      title: 'Onsite Calibration & Verification',
      description: 'Our engineers arrive at your workshop or airfield with all necessary reference standards and equipment.',
      icon: Truck,
    },
    {
      step: '03',
      title: 'Certificate + Portal Access',
      description: 'UKAS certificates uploaded directly to your secure portal within 48 hours. Download anytime, audit-ready.',
      icon: Upload,
    },
  ]

  return (
    <section id="process" className="py-24 md:py-32 bg-slate-50">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="w-16 h-1 bg-slate-300 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">How It Works</h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Simple, efficient, and designed to minimise your downtime. Here's how we deliver audit-ready calibration.
          </p>
        </div>

        {/* Timeline - Horizontal on desktop */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line - Desktop */}
          <div className="hidden md:block absolute top-20 left-[12%] right-[12%] h-0.5 bg-slate-300" />
          
          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                {/* Step Number Circle */}
                <div className="relative z-10 mx-auto mb-8">
                  <div className="w-40 h-40 bg-white rounded-2xl flex flex-col items-center justify-center border-2 border-slate-200 shadow-lg mx-auto">
                    <step.icon className="w-12 h-12 text-slate-700 mb-3" />
                    <span className="text-3xl font-bold text-slate-900">{step.step}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>

                {/* Arrow - Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 -right-8 z-20">
                    <ChevronRight className="w-10 h-10 text-slate-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* What You Receive Panel */}
        <div className="mt-20 grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-8 lg:p-10 border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">What You Receive</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">UKAS-accredited calibration certificates</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Full traceability to national standards</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">24/7 portal access for instant certificate retrieval</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Calibration labels applied to each instrument</span>
              </li>
            </ul>
          </div>
          <div className="bg-slate-100 rounded-2xl p-8 lg:p-10 border border-slate-200 flex items-center justify-center">
            <div className="text-center">
              <FileCheck className="w-16 h-16 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-500 font-medium">Certificate Sample</p>
              <p className="text-sm text-slate-400 mt-2">Placeholder for certificate preview</p>
            </div>
          </div>
        </div>

        {/* Portal CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-white border-2 border-slate-200 rounded-xl px-8 py-5 shadow-sm">
            <FileCheck className="w-6 h-6 text-slate-700" />
            <div className="text-left">
              <p className="font-semibold text-slate-900">Already a customer?</p>
              <p className="text-sm text-slate-600">Access your certificates in the Customer Portal</p>
            </div>
            <Button variant="outline" size="sm" className="ml-4 border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-400 transition-all duration-200">
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 border border-slate-200 rounded-full text-sm font-medium text-slate-700 mb-4">
              <Sparkles className="w-4 h-4 text-slate-600" />
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
                <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
                  <ListChecks className="w-5 h-5 text-slate-700" />
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
            <div className="bg-slate-900 rounded-2xl p-8 shadow-elevated text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
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
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-white/20" />
                  <p className="text-slate-300 leading-relaxed pl-4">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-700">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white font-semibold">
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
    <section id="faq" className="py-24 md:py-32 bg-white">
      <div className="container-main">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left Column - Header */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-32">
              <div className="w-16 h-1 bg-slate-300 mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Frequently Asked Questions</h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Find answers to common questions about our calibration services. 
                Can't find what you're looking for?
              </p>
              <Button variant="outline" className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-400 font-semibold px-6 py-3 transition-all duration-200" asChild>
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
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-slate-700 py-5 [&[data-state=open]>svg]:rotate-180">
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
    <section className="bg-slate-900 py-20 md:py-24">
      <div className="container-main">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-white mb-4 text-4xl md:text-5xl font-bold tracking-tight">Ready to Get Started?</h2>
            <p className="text-slate-300 text-xl leading-relaxed">
              Get a quote for your workshop or airfield calibration needs — or access your certificates now.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onQuoteClick}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-lg font-semibold transition-all bg-primary hover:bg-primary/90 text-white px-8 py-4 h-auto shadow-xl hover:shadow-2xl hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-50"
            >
              <Calculator className="w-5 h-5" />
              Request a Quote
            </button>
            <a
              href="#portal"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-lg font-semibold transition-colors border-2 border-white/30 text-white bg-transparent hover:bg-white/10 hover:text-white px-8 py-4 h-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 disabled:pointer-events-none disabled:opacity-50"
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
              <a href="tel:01709542334" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="w-5 h-5 text-primary/80" />
                <span>01709 542334</span>
              </a>
              <a href="mailto:info@oakrange.co.uk" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail className="w-5 h-5 text-primary/80" />
                <span>info@oakrange.co.uk</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary/80 flex-shrink-0 mt-0.5" />
                <span>
                  Oakrange Engineering Ltd<br />
                  Manor Farm. Styrrup Rd<br />
                  Oldcotes, Worksop S81 8JB
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

// ==================== BACK TO TOP BUTTON ====================
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-4 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
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
        <OnsiteCoverageSection />
        <ServicesSection />
        <IndustriesSection />
        <AccreditationSection />
        <CaseStudiesSection />
        <ProcessSection />
        <AIQuoteBuilderPreview onQuoteClick={() => setQuoteBuilderOpen(true)} />
        <TestimonialsSection />
        <FAQSection />
        <CTABand onQuoteClick={() => setQuoteBuilderOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to Top Button */}
      <BackToTop />

      {/* Quote Builder Slide-Over */}
      <QuoteBuilder 
        isOpen={quoteBuilderOpen} 
        onClose={() => setQuoteBuilderOpen(false)} 
      />
    </div>
  )
}