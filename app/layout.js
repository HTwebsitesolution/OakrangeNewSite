import './globals.css'

export const metadata = {
  title: 'Oakrange Engineering | Precision Calibration Services UK',
  description: 'UKAS-traceable onsite calibration services across the UK. Expert engineers, precision instruments, traceable results.',
  keywords: 'calibration, UKAS-traceable, onsite calibration, engineering, UK, precision measurement',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  )
}