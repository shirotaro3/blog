import { Suspense } from 'react'
import { Metadata } from 'next'
import { Analytics } from '@/components/functional/Analytics'
import { Footer } from '@/components/ui/Footer'
import { NavigationMenu } from '@/components/ui/NavigationMenu'
import { Overlay } from '@/components/ui/Overlay'
import { config } from '@/data/siteConfig'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === 'production' ? config.SITE_URL : 'http://localhost:3000',
  ),
  title: config.SITE_TITLE,
  description: config.SITE_DESCRIPTION,
  robots: 'noindex',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="relative">
        <Suspense>
          <Analytics />
        </Suspense>
        <NavigationMenu />
        <Overlay />
        {children}
        <Footer />
      </body>
    </html>
  )
}
