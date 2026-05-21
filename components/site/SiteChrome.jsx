'use client'

import { UtilityBar } from '@/components/site/UtilityBar'
import { SiteNavigation } from '@/components/site/SiteNavigation'
import { SiteFooter } from '@/components/site/SiteFooter'
import { QuoteProvider } from '@/components/site/quote-context'

export function SiteChrome({
  children,
  showUtilityBar = false,
  showLogoInNav = true,
  showFooter = true,
  quoteSource = 'website',
  quoteSheetProps = {},
}) {
  return (
    <QuoteProvider quoteSource={quoteSource} quoteSheetProps={quoteSheetProps}>
      <div className="min-h-screen bg-background">
        {showUtilityBar && <UtilityBar />}
        <SiteNavigation showLogo={showLogoInNav} />
        {children}
        {showFooter && <SiteFooter />}
      </div>
    </QuoteProvider>
  )
}
