'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { useHamburgerMenu } from '@/components/ui/NavigationMenu'
import { site } from '@/data/site'
import Icon from '@/public/svg/search.svg'

export function Header() {
  const pathname = usePathname()
  const [, setIsOpen] = useHamburgerMenu()
  const handleClick = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <header
      className={clsx(
        'bg-building_sp relative top-0 z-10 overflow-hidden w-full h-[var(--header)]',
        'md:bg-building',
      )}
    >
      <div className="base-container h-[var(--header)] relative md:bg-white-gradient-100 z-10 flex items-center">
        <div className="items-center md:gap-10 text-white">
          {pathname === '/' ? (
            <h1 className="inline-block text-xl md:text-2xl font-bold drop-shadow px-4 md:px-6 py-1 md:py-2">
              {site.title}
            </h1>
          ) : (
            <Link
              href="/"
              className="inline-block text-xl md:text-2xl font-bold drop-shadow px-4 md:px-6 py-1 md:py-2"
            >
              {site.title}
            </Link>
          )}
        </div>
        <div className="flex items-end justify-center gap-3 md:gap-5 absolute right-5 lg:right-10">
          <button onClick={handleClick} className={clsx('drop-shadow')}>
            <Icon className={clsx('w-5 h-5', 'lg:w-6 lg:h-6')} />
          </button>
        </div>
      </div>
    </header>
  )
}
