import { ComponentProps } from 'react'
import clsx from 'clsx'

type Props = ComponentProps<'button'> & { size?: 'sm' | 'lg' }

// const buttonClass = {
//   sm: 'w-full font-bold flex justify-center items-center border duration-300',
//   lg: 'w-full font-bold flex justify-center items-center border duration-300'
// }

export function Button({ children, onClick, size = 'lg' }: Props) {
  const sizeClass = size === 'lg' ? 'button-lg' : 'button-sm'

  return (
    <button onClick={onClick} className={clsx('button button-primary', sizeClass)}>
      {children}
    </button>
  )
}
