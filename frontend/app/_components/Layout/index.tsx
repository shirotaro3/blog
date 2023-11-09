import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import clsx from 'clsx'
import { BreadCrumbs } from '@/components/BreadCrumbs'

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div
        className={clsx(
          'flex-grow bg-gray-200 flex flex-col bg-silhouette bg-repeat-x',
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
