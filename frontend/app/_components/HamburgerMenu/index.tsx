'use client'

import clsx from 'clsx'
import { FadeInBox } from '@/components/FadeInBox'
import { categories } from '@/data/categories'
import { MenuContainer } from './MenuContainer'
import { MenuLinks } from './MenuLinks'
import { useHamburgerMenu } from './useHamburgerMenu'

const categoryLinks = Object.keys(categories).map((category) => ({
  href: `/posts/${category}`,
  text: categories[category],
}))

export function HamburgerMenu() {
  const [isOpen] = useHamburgerMenu()
  if (!isOpen) return null
  return (
    <MenuContainer>
      <FadeInBox className={clsx('w-1col-md')}>
        <MenuLinks heading={'カテゴリー'} links={categoryLinks} />
      </FadeInBox>
      <FadeInBox className={clsx('w-1col-md')}>
        <MenuLinks heading={'タグ'} links={[]} />
      </FadeInBox>
      <FadeInBox className={clsx('w-1col-md')}>
        <MenuLinks heading={'その他'} links={[]} />
      </FadeInBox>
    </MenuContainer>
  )
}

export { useHamburgerMenu } from './useHamburgerMenu'
