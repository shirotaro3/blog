'use client'

import Link from 'next/link'
import clsx from 'clsx'
import { useBreadCrumbs } from './hooks/useBreadCrumbs'

export function BreadCrumbs() {
  const breadCrumbs = useBreadCrumbs()
  if (breadCrumbs.length === 0) return null
  return (
    <ol className={clsx('flex h-2 items-center text-sm')}>
      {breadCrumbs.map(({ path, text }) => (
        <li
          key={path}
          className={clsx('relative pr-8 after:content-[">"] after:absolute after:right-3')}
        >
          <Link href={path}>{text}</Link>
        </li>
      ))}
    </ol>
  )
}
