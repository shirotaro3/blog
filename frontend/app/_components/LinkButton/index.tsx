import { ComponentProps } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

type Props = ComponentProps<'a'> & {
  href: string
  size?: 'sm' | 'lg'
  variant?: 'primary' | 'secondary'
}

export function LinkButton({ children, href, size = 'lg', variant = 'primary' }: Props) {
  return (
    <Link
      className={clsx(
        size === 'lg' ? 'button-lg' : 'button-sm',
        variant === 'primary' ? 'button-primary' : 'button-secondary',
        'button',
      )}
      href={href}
    >
      {children}
    </Link>
  )
}
