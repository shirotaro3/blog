import { Metadata } from 'next'
import { config } from '@/data/siteConfig'
import './globals.css'

export const metadata: Metadata = {
  title: config.SITE_TITLE,
  description: config.SITE_DESCRIPTION,
  robots: 'noindex',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
  // appdirでページ遷移時のスクロール挙動が謎なので一旦別コンポーネントで対応
}
