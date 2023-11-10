'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { useBreadCrumbs } from './useBreadCrumbs'

export function BreadCrumbs() {
  const breadCrumbs = useBreadCrumbs()
  return (
    <ol className={clsx('flex h-2 items-center text-sm')}>
      {breadCrumbs.map(({ path, text }) => {
        return (
          <li
            key={path}
            className={clsx('relative pr-8 after:content-[">"] after:absolute after:right-3')}
          >
            <Link href={path}>{text}</Link>
          </li>
        )
      })}
    </ol>
  )
}
