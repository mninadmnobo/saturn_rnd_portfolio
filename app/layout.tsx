import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Providers } from '@/components/providers/ThemeProvider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Saturn Textiles R&D - Advanced Textile Innovation',
  description: 'Pioneering research and development in advanced textile technologies. Discover our innovations in sustainable materials, smart textiles, and high-performance fabrics.',
  generator: 'v0.app',
  keywords: ['textiles', 'R&D', 'innovation', 'materials', 'research', 'sustainable'],
  openGraph: {
    title: 'Saturn Textiles R&D',
    description: 'Pioneering textile innovation through cutting-edge research',
    type: 'website',
  },
  icons: {
    icon: '/saturn-logo.png',
    apple: '/saturn-logo.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b1f3a',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        <div className="fixed inset-0 -z-50 pointer-events-none">
          <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(57,120,206,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(57,120,206,0.12)_1px,transparent_1px)] [background-size:48px_48px]" />
          <div className="absolute -left-40 top-20 h-[32rem] w-[32rem] rounded-full bg-blue-700/15 blur-[120px]" />
          <div className="absolute right-0 top-24 h-[28rem] w-[28rem] rounded-full bg-orange-600/10 blur-[120px]" />
        </div>
        <Providers>
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </Providers>
      </body>
    </html>
  )
}
