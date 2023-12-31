'use client'

import clsx from 'clsx'
import { useHamburgerMenu } from '@/components/ui/NavigationMenu/hooks/useNavigationMenu'

export function Overlay() {
  const [isOpen, setIsOpen] = useHamburgerMenu()
  const handleClick = () => {
    setIsOpen((prev) => !prev)
  }
  if (!isOpen) return null
  return (
    <div
      className={clsx('fixed px-4 top-0 bottom-0 left-0 right-0 z-20 bg-darkness-40')}
      tabIndex={-1}
      onClick={handleClick}
    ></div>
  )
}
