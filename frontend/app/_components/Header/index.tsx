import Link from 'next/link'
import { config } from '@/data/siteConfig'
import { NavigationButton } from './NavigationButton'

export function Header() {
  return (
    <header className="bg-building md:fixed relative top-0 z-10 overflow-hidden w-full h-[var(--header)]">
      <div className="base-container h-[var(--header)] relative md:bg-white-gradient-100 z-10 flex items-center">
        <div className="items-center md:gap-10 text-white">
          <Link href="/">
            <h1 className="inline-block text-xl md:text-2xl font-bold drop-shadow px-4 md:px-6 py-1 md:py-2">
              {config.SITE_TITLE}
            </h1>
          </Link>
        </div>
        <div className="flex items-end justify-center gap-3 md:gap-5 absolute right-5 lg:right-10">
          <NavigationButton />
        </div>
      </div>
    </header>
  )
}
