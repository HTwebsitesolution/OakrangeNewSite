import Link from 'next/link'
import { Phone, Mail, FileCheck, ExternalLink } from 'lucide-react'
import { BrandLogo } from '@/components/site/BrandLogo'
import { PATHS, SITE_EMAIL, SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from '@/lib/site-config'

export function UtilityBar() {
  return (
    <div className="bg-slate-900 text-slate-300 text-sm relative">
      <div className="container-main flex items-center justify-between py-2 relative">
        <div className="flex items-center gap-6 z-10">
          <a href={SITE_PHONE_TEL} className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">{SITE_PHONE_DISPLAY}</span>
          </a>
          <a href={`mailto:${SITE_EMAIL}`} className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail className="w-4 h-4" />
            <span className="hidden md:inline">{SITE_EMAIL}</span>
          </a>
        </div>

        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 bg-white flex items-center justify-center px-4 min-w-[180px] max-w-[220px] z-20">
          <BrandLogo variant="dark" />
        </div>

        <div className="flex items-center gap-4 z-10 ml-auto">
          <Link
            href={PATHS.verifyCertificate}
            className="flex items-center gap-2 hover:text-white transition-colors px-3 py-1 rounded hover:bg-slate-800"
          >
            <FileCheck className="w-4 h-4" />
            <span>Verify Certificate</span>
          </Link>
          <Link
            href={PATHS.customerPortal}
            className="flex items-center gap-2 hover:text-white transition-colors px-3 py-1 rounded hover:bg-slate-800"
          >
            <ExternalLink className="w-4 h-4" />
            <span className="hidden sm:inline">Customer Portal</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
