import Link from 'next/link'
import { Gauge, Phone, Mail, MapPin } from 'lucide-react'
import { FOOTER_LINKS, SITE_EMAIL, SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from '@/lib/site-config'

export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-slate-900 text-slate-300">
      <div className="container-main section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
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
              UKAS-traceable calibration laboratory providing precision measurement services across the UK since 1998.
            </p>
            <div className="space-y-3">
              <a href={SITE_PHONE_TEL} className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="w-5 h-5 text-primary/80" />
                <span>{SITE_PHONE_DISPLAY}</span>
              </a>
              <a href={`mailto:${SITE_EMAIL}`} className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail className="w-5 h-5 text-primary/80" />
                <span>{SITE_EMAIL}</span>
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

          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.services.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.support.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="container-main py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              © {currentYear} Oakrange Engineering Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
