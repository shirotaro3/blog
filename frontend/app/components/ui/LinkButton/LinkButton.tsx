import { ComponentProps } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

type Props = ComponentProps<'a'> & {
  href: string
  size?: 'sm' | 'lg'
  variant?: 'primary' | 'primary-invert'
}

const sizes = {
  sm: 'h-10 text-base',
  lg: 'h-14 text-lg',
}
const variants = {
  primary:
    'bg-primary-main text-white lg:hover:bg-white lg:hover:text-primary-main active:bg-white active:text-primary-main border-primary-main',
  'primary-invert':
    'bg-white text-primary-main lg:hover:bg-primary-main lg:hover:text-white active:bg-primary-main active:text-white border-primary-main',
}

export function LinkButton({ children, href, size = 'lg', variant = 'primary' }: Props) {
  return (
    <Link
      className={clsx(
        'w-full font-bold flex justify-center items-center border duration-300',
        sizes[size],
        variants[variant],
      )}
      href={href}
    >
      {children}
    </Link>
  )
}
