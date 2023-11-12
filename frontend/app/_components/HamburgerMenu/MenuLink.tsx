'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

type Props = {
  children: string
  href: string
}

export function MenuLink({ children, href }: Props) {
  const pathname = usePathname()
  return (
    <li className={clsx(pathname === href && 'pointer-events-none bg-white')}>
      <Link href={href} className={clsx('p-4 block', 'lg:hover:bg-white')}>
        {children}
      </Link>
    </li>
  )
}
