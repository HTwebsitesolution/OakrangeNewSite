'use client'

import { createContext, useContext, useState } from 'react'
import { QuoteBuilderSheet } from '@/components/site/QuoteBuilderSheet'

const QuoteContext = createContext({
  openQuote: () => {},
})

export function useSiteQuote() {
  return useContext(QuoteContext)
}

export function QuoteProvider({ children, quoteSource = 'website', quoteSheetProps = {} }) {
  const [quoteOpen, setQuoteOpen] = useState(false)

  return (
    <QuoteContext.Provider value={{ openQuote: () => setQuoteOpen(true) }}>
      {children}
      <QuoteBuilderSheet
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        source={quoteSource}
        {...quoteSheetProps}
      />
    </QuoteContext.Provider>
  )
}
