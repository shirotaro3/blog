import { ReactNode, JSX } from 'react'
import clsx from 'clsx'
import { BreadCrumbs } from '@/components/ui/BreadCrumbs'
import { Header } from '@/components/ui/Header'

type Props = {
  children: JSX.Element | ReactNode // TODO: 時間ある時にちゃんとやる
}

// スクロールの謎挙動対策
export function RootLayout({ children }: Props) {
  return (
    <>
      <Header />
      <div
        className={clsx(
          'flex-grow bg-grayscale-200 flex flex-col bg-silhouette_sp bg-repeat-x',
          'md:pt-[var(--header)] md:bg-left-top-80 md:bg-fixed md:bg-silhouette',
        )}
      >
        <main className={clsx('base-container pb-8 min-h-main overflow-hidden')}>
          <nav className={clsx('py-6', 'md:py-8')}>
            <BreadCrumbs />
          </nav>
          {children}
        </main>
      </div>
    </>
  )
}
