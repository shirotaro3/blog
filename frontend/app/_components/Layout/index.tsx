import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import clsx from 'clsx'

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div
        className={clsx(
          'flex-grow bg-gray-200 flex flex-col bg-silhouette bg-repeat-x',
          'md:pt-[var(--header)] md:bg-left-top-80',
        )}
      >
        <main className={clsx('base-container pt-20 pb-8 min-h-main overflow-hidden')}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
