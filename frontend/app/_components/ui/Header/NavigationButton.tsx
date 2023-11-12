'use client'

import clsx from 'clsx'
import { useHamburgerMenu } from '@/components/ui/NavigationMenu'

export function NavigationButton() {
  const [, setIsOpen] = useHamburgerMenu()
  const handleClick = () => {
    setIsOpen((prev) => !prev)
  }

  // TODO: アイコン作る
  return (
    <button onClick={handleClick} className={clsx('font-bold text-xl text-white drop-shadow')}>
      三
    </button>
  )
}
