'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { FadeInObserver } from '@/components/ui/FadeInObserver'
import { categories } from '@/data/categories'
import { MenuLink } from './MenuLink'
import { MenuLinkGroup } from './MenuLinkGroup'
import { useHamburgerMenu } from './hooks/useNavigationMenu'

const categoryLinks = Object.keys(categories).map((category) => ({
  href: `/posts/${category}`,
  text: categories[category],
}))

export function NavigationMenu() {
  const [isOpen, setIsOpen] = useHamburgerMenu()
  const pathname = usePathname()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  if (!isOpen) return null
  return (
    <div
      className={clsx(
        'absolute md:fixed top-[var(--header)] bottom-auto base-container z-30',
        'lg:left-5 lg:right-5',
      )}
    >
      <FadeInObserver variant="invert">
        <nav className={clsx('bg-brightness-80 flex flex-wrap border-x')}>
          <MenuLinkGroup groupName="カテゴリから探す">
            {categoryLinks.map(({ href, text }) => (
              <MenuLink key={href} href={href}>
                {text}
              </MenuLink>
            ))}
          </MenuLinkGroup>
          {/* <MenuLinkGroup groupName="タグから探す">
            {categoryLinks.map(({ href, text }) => (
              <MenuLink href={href}>{text}</MenuLink>
            ))}
          </MenuLinkGroup> */}
        </nav>
      </FadeInObserver>
    </div>
  )
}

export { useHamburgerMenu } from './hooks/useNavigationMenu'
