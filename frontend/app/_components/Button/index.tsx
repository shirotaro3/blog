import { ComponentProps } from 'react'
import clsx from 'clsx'

type Props = ComponentProps<'button'> & {
  size?: 'sm' | 'lg'
  variant?: 'primary' | 'primary-invert'
}

const sizes = {
  sm: 'h-10 text-base',
  lg: 'h-14 text-lg',
}
const variants = {
  primary:
    'bg-blue-300 text-white lg:hover:bg-white lg:hover:text-blue-300 active:bg-white active:text-blue-300 border-blue-300',
  'primary-invert':
    'bg-white text-blue-300 lg:hover:bg-blue-300 lg:hover:text-white active:bg-blue-300 active:text-white border-blue-300',
}

export function Button({ children, onClick, size = 'lg', variant = 'primary' }: Props) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'w-full font-bold flex justify-center items-center border duration-300',
        sizes[size],
        variants[variant],
      )}
    >
      {children}
    </button>
  )
}
