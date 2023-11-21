import { Suspense, ReactNode } from 'react'
import { Metadata } from 'next'
import { Analytics } from '@/components/functional/Analytics'
import { Footer } from '@/components/ui/Footer'
import { NavigationMenu } from '@/components/ui/NavigationMenu'
import { Overlay } from '@/components/ui/Overlay'
import { site } from '@/data/site'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? site.url : 'http://localhost:3000'),
  title: site.title,
  description: site.description,
  robots: 'noindex',
}

type Props = {
  children: ReactNode[]
}

export default function RootLayout({ children }: Props) {
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
