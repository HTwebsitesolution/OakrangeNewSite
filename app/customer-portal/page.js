'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Gauge, ExternalLink, FileCheck, Download, Clock, Users,
  Shield, Lock, Key, CheckCircle2, AlertTriangle, Menu, X,
  Mail, Phone, Building2, History, Search, Bell, Settings
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

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
              <Link href="/verify-certificate">
                <FileCheck className="w-4 h-4 mr-2" />
                Verify Certificate
              </Link>
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
    <section className="bg-gradient-to-br from-oakblue-600 via-oakblue-700 to-oakblue-800 py-16 md:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container-main relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            <span>Oakrange Online</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Your Calibration{' '}
            <span className="text-oakblue-200">Certificates Online</span>
          </h1>
          <p className="text-xl text-oakblue-100 mb-8 max-w-2xl mx-auto">
            Access, download, and manage all your calibration certificates 24/7 through the Oakrange Online portal.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg"
              className="bg-white text-oakblue-700 hover:bg-oakblue-50 font-semibold px-8 py-4 h-auto shadow-lg"
              asChild
            >
              <a href="https://oakrangeonline.co.uk" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-5 h-5 mr-2" />
                Open Oakrange Online
              </a>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 h-auto"
              asChild
            >
              <a href="https://oakrangeportal.co.uk" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-5 h-5 mr-2" />
                Portal Redirect
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

// ==================== FEATURES SECTION ====================
const FeaturesSection = () => {
  const features = [
    {
      icon: FileCheck,
      title: 'View & Download Certificates',
      description: 'Access all your current and historical calibration certificates. Download as PDF anytime you need them.',
    },
    {
      icon: History,
      title: 'Full Calibration History',
      description: 'See the complete calibration history for each piece of equipment, including previous results and adjustments.',
    },
    {
      icon: Search,
      title: 'Search & Filter',
      description: 'Quickly find certificates by equipment type, serial number, date, or location across your entire portfolio.',
    },
    {
      icon: Bell,
      title: 'Recalibration Reminders',
      description: 'Automatic email notifications before your equipment is due for recalibration. Never miss a deadline.',
    },
    {
      icon: Download,
      title: 'Batch Downloads',
      description: 'Preparing for an audit? Download multiple certificates at once in a single ZIP file.',
    },
    {
      icon: Users,
      title: 'Multi-User Access',
      description: 'Add team members with their own login credentials. Perfect for quality managers and workshop supervisors.',
    },
  ]

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-main">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What You Can Do Inside</h2>
          <p className="text-lg text-slate-600">
            The Oakrange Online portal gives you complete control over your calibration documentation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-slate-200 hover:border-oakblue-300 hover:shadow-lg transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-oakblue-100 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-oakblue-600" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// ==================== ACCESS SECTION ====================
const AccessSection = () => {
  return (
    <section className="py-16 md:py-20 bg-slate-50">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Who Gets Access */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Who Gets Access?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-white p-4 rounded-xl border border-slate-200">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Existing Customers</h3>
                  <p className="text-sm text-slate-600">
                    If you have had calibration work done with Oakrange, you automatically have portal access. 
                    Check your email for login details sent after your first calibration.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white p-4 rounded-xl border border-slate-200">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Multi-Site Businesses</h3>
                  <p className="text-sm text-slate-600">
                    Manage certificates across multiple locations with a single login. 
                    Filter by site and share access with local supervisors.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white p-4 rounded-xl border border-slate-200">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Quality Managers & Auditors</h3>
                  <p className="text-sm text-slate-600">
                    Pull audit-ready certificate packs instantly. No more chasing paperwork before inspections.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Request Access */}
          <Card className="border-oakblue-200 bg-gradient-to-br from-white to-oakblue-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="w-5 h-5 text-oakblue-600" />
                Need Access?
              </CardTitle>
              <CardDescription>
                Cannot find your login details? We can help.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-6 h-6 bg-oakblue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                  <span className="text-slate-700">Check your email inbox and spam folder</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-6 h-6 bg-oakblue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                  <span className="text-slate-700">Search for emails from "Oakrange" or "noreply@oakrange"</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-6 h-6 bg-oakblue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
                  <span className="text-slate-700">Still cannot find it? Contact us below</span>
                </div>
              </div>
              
              <div className="pt-4 border-t border-slate-200">
                <p className="text-sm text-slate-600 mb-4">
                  Email us with your company name and we will resend your login credentials:
                </p>
                <Button className="bg-oakblue-600 hover:bg-oakblue-700 w-full" asChild>
                  <a href="mailto:portal@oakrange.co.uk?subject=Portal Access Request">
                    <Mail className="w-4 h-4 mr-2" />
                    portal@oakrange.co.uk
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

// ==================== SECURITY NOTICE ====================
const SecurityNotice = () => {
  return (
    <section className="py-12 bg-amber-50 border-y border-amber-200">
      <div className="container-main">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 max-w-4xl mx-auto">
          <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center flex-shrink-0">
            <Lock className="w-8 h-8 text-amber-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-amber-900 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Keep Your Login Details Safe
            </h3>
            <p className="text-amber-800">
              Your portal login provides access to confidential calibration records. Please do not share your 
              password and ensure you log out when using shared computers. If you suspect unauthorised access, 
              contact us immediately to reset your credentials.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ==================== CTA SECTION ====================
const CTASection = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-main">
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Access Your Certificates?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto">
            Log in to Oakrange Online and manage all your calibration documentation in one place.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg"
              className="bg-oakblue-600 hover:bg-oakblue-700 text-white px-8 py-4 h-auto"
              asChild
            >
              <a href="https://oakrangeonline.co.uk" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-5 h-5 mr-2" />
                Open Oakrange Online
              </a>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 h-auto"
              asChild
            >
              <a href="https://oakrangeportal.co.uk" target="_blank" rel="noopener noreferrer">
                Portal Redirect
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

// ==================== MAIN PAGE ====================
export default function CustomerPortalPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <AccessSection />
      <SecurityNotice />
      <CTASection />

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
    </div>
  )
}
