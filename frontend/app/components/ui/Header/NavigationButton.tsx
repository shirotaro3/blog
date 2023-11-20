'use client'

import clsx from 'clsx'
import { useHamburgerMenu } from '@/components/ui/NavigationMenu'
import Icon from '@/public/svg/search.svg'

export function NavigationButton() {
  const [, setIsOpen] = useHamburgerMenu()
  const handleClick = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <button onClick={handleClick} className={clsx('font-bold text-xl text-white drop-shadow')}>
      <Icon className={clsx('w-5 h-5', 'lg:w-6 lg:h-6')} />
    </button>
  )
}
