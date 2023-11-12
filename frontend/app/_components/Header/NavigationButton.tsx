'use client'

import clsx from 'clsx'
import { useHamburgerMenu } from '@/components/HamburgerMenu'

export function NavigationButton() {
  const [isOpen, setIsOpen] = useHamburgerMenu()
  const handleClick = () => {
    setIsOpen((prev) => !prev)
  }

  const textColorClass = isOpen ? 'text-primary' : 'text-white'

  return (
    <button
      onClick={handleClick}
      className={clsx('font-bold text-xl drop-shadow', 'lg:hover:text-primary', textColorClass)}
    >
      三
    </button>
  )
}
