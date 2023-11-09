import Link from 'next/link'
import { SITE_TITLE, SITE_DESCRIPTION_SHORT } from '@consts'

export function Header() {
  return (
    <header className="bg-building md:fixed relative top-0 z-10 overflow-hidden w-full h-[var(--header)]">
      <div className="base-container h-[var(--header)] relative md:bg-white-gradient-100 z-10 flex items-center">
        <div className="flex flex-col mt-2 md:mt-0 md:flex-row items-center md:gap-10 text-white">
          <Link href="/">
            <h1 className="inline-block text-xl md:text-2xl font-bold drop-shadow duration-200 px-4 md:px-6 py-1 md:py-2">
              {SITE_TITLE}
            </h1>
          </Link>
          <p className="text-xs md:text-sm drop-shadow">{SITE_DESCRIPTION_SHORT}</p>
        </div>
        <div className="flex items-end gap-3 md:gap-5 absolute bottom-0 right-2 lg:right-20">
          {/* links */}
        </div>
      </div>
    </header>
  )
}
