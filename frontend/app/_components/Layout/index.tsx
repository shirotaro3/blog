import clsx from 'clsx'
import { BreadCrumbs } from '@/components/BreadCrumbs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { HamburgerMenu } from '../HamburgerMenu'
import { Overlay } from './Overlay'

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HamburgerMenu />
      <Overlay />
      <Header />
      <div
        className={clsx(
          'flex-grow bg-grayscale-200 flex flex-col bg-silhouette bg-repeat-x',
          'md:pt-[var(--header)] md:bg-left-top-80 md:bg-fixed',
        )}
      >
        <main className={clsx('base-container pb-8 min-h-main overflow-hidden')}>
          <nav className={clsx('py-8')}>
            <BreadCrumbs />
          </nav>
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
