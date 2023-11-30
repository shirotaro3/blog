import { Suspense, ReactNode } from 'react'
import { Metadata } from 'next'
import clsx from 'clsx'
import { Analytics } from '@/components/functional/Analytics'
import { BreadCrumbs } from '@/components/ui/BreadCrumbs'
import { Footer } from '@/components/ui/Footer'
import { Header } from '@/components/ui/Header'
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

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="ja">
      <body className="relative">
        <Suspense>
          <Analytics />
        </Suspense>
        <NavigationMenu />
        <Overlay />
        <Header />
        <div
          className={clsx(
            'flex-grow bg-grayscale-200 flex flex-col bg-silhouette_sp bg-repeat-x',
            'md:bg-silhouette',
          )}
        >
          <main className={clsx('base-container pb-8 min-h-main overflow-hidden')}>
            <nav className={clsx('py-6', 'md:py-8')}>
              <BreadCrumbs />
            </nav>
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  )
}
