import { createElement } from 'react'
import clsx from 'clsx'

type Props = {
  level: number
  children: any
  className?: string
}

export function Heading({ level, children, className }: Props) {
  let elementType = 'h1'
  if (level === 2) elementType = 'h2'
  if (level === 3) elementType = 'h3'

  return createElement(
    elementType,
    {
      className: clsx(className, 'font-bold text-lg p-4 bg-brightness-40'),
    },
    [...children],
  )
}
