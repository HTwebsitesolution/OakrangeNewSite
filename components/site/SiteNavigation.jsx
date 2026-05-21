'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import {
  Menu, X, ChevronDown, ChevronRight, Calculator, Gauge, Thermometer, Ruler, Scale, Zap,
  Wrench, Tractor, HardHat, PlaneTakeoff, Factory, Pill,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BrandLogo } from '@/components/site/BrandLogo'
import { useSiteQuote } from '@/components/site/quote-context'
import { PATHS } from '@/lib/site-config'

const servicesMenu = [
  { label: 'Torque Calibration', href: '/services#torque', icon: Gauge, desc: 'Wrenches, multipliers, testers' },
  { label: 'Pressure Calibration', href: '/services#pressure', icon: Gauge, desc: 'Gauges, transducers, sensors' },
  { label: 'Temperature Calibration', href: '/services#temperature', icon: Thermometer, desc: 'Thermometers, probes, ovens' },
  { label: 'Dimensional Calibration', href: '/services#dimensional', icon: Ruler, desc: 'Calipers, micrometers, gauges' },
  { label: 'Mass Calibration', href: '/services#mass', icon: Scale, desc: 'Scales, weights, balances' },
  { label: 'Electrical Calibration', href: '/services#electrical', icon: Zap, desc: 'Multimeters, PAT testers' },
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
  { label: 'Services', href: PATHS.services, hasDropdown: true, menu: servicesMenu },
  { label: 'Industries', href: PATHS.industries, hasDropdown: true, menu: industriesMenu },
  { label: 'Process', href: '/#process' },
  { label: 'About', href: '/#about' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/#contact' },
]

export function SiteNavigation({ showLogo = false }) {
  const { openQuote } = useSiteQuote()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null)
  const closeDropdownTimeoutRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    return () => {
      if (closeDropdownTimeoutRef.current) clearTimeout(closeDropdownTimeoutRef.current)
    }
  }, [])

  const openDesktopDropdown = (label) => {
    if (closeDropdownTimeoutRef.current) {
      clearTimeout(closeDropdownTimeoutRef.current)
      closeDropdownTimeoutRef.current = null
    }
    setOpenDropdown(label)
  }

  const closeDesktopDropdown = () => {
    if (closeDropdownTimeoutRef.current) clearTimeout(closeDropdownTimeoutRef.current)
    closeDropdownTimeoutRef.current = setTimeout(() => setOpenDropdown(null), 180)
  }

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
      } ${showLogo ? 'border-b border-slate-200' : ''}`}
    >
      <div className="container-main">
        <div className="flex items-center justify-between h-16 md:h-20">
          {showLogo && <BrandLogo />}

          <div className={`hidden lg:flex items-center gap-6 ${showLogo ? 'ml-auto' : ''}`}>
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.hasDropdown && openDesktopDropdown(link.label)}
                onMouseLeave={() => link.hasDropdown && closeDesktopDropdown()}
              >
                <Link
                  href={link.href}
                  className="text-slate-700 hover:text-primary font-semibold text-[15px] tracking-wide transition-all duration-300 relative group flex items-center gap-1.5 px-3 py-2"
                >
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        openDropdown === link.label ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                  <span className="absolute -bottom-1 left-3 right-3 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>

                {link.hasDropdown && openDropdown === link.label && (
                  <div
                    className="absolute top-full left-0 mt-3 w-[520px] bg-white rounded-2xl shadow-2xl border border-slate-200/50 backdrop-blur-xl overflow-hidden animate-fade-in-up z-50"
                    onMouseEnter={() => openDesktopDropdown(link.label)}
                    onMouseLeave={closeDesktopDropdown}
                  >
                    <div className="absolute -top-2 left-8 w-4 h-4 bg-white border-l border-t border-slate-200/50 rotate-45" />
                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-4">
                        {link.menu.map((item, idx) => {
                          const Icon = item.icon
                          return (
                            <Link
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
                                <div className="text-xs text-slate-500 line-clamp-1">{item.desc}</div>
                              </div>
                              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                    <div className="px-6 py-4 bg-gradient-to-r from-slate-50 to-white border-t border-slate-100">
                      <Link href={link.href} className="flex items-center justify-between group">
                        <span className="text-sm font-semibold text-slate-900 group-hover:text-primary transition-colors">
                          View all {link.label.toLowerCase()}
                        </span>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Button
              onClick={openQuote}
              className="ml-2 bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 border-0"
            >
              <Calculator className="w-4 h-4" />
              Request a Quote
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
                <div key={link.label}>
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileDropdownOpen(mobileDropdownOpen === link.label ? null : link.label)
                        }
                        className="w-full px-4 py-3 text-slate-600 hover:text-primary hover:bg-slate-50 rounded-xl font-semibold transition-colors flex items-center justify-between"
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            mobileDropdownOpen === link.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {mobileDropdownOpen === link.label && (
                        <div className="ml-4 mt-2 mb-2 space-y-1 border-l-2 border-slate-200 pl-4">
                          {link.menu.map((item, idx) => {
                            const Icon = item.icon
                            return (
                              <Link
                                key={idx}
                                href={item.href}
                                className="flex items-center gap-3 px-4 py-2.5 text-slate-600 hover:text-primary hover:bg-slate-50 rounded-lg font-medium transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                <Icon className="w-4 h-4" />
                                <span className="text-sm">{item.label}</span>
                              </Link>
                            )
                          })}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="px-4 py-3 text-slate-600 hover:text-primary hover:bg-slate-50 rounded-xl font-semibold transition-colors block"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="px-4 pt-4 border-t border-slate-100 mt-2">
                <Button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    openQuote()
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
