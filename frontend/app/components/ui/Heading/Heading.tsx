import { createElement } from 'react'
import { ReactNode, JSX } from 'react'
import clsx from 'clsx'

type Props = {
  level: number
  children: JSX.Element | ReactNode // TODO: 時間ある時にちゃんとやる
  className?: string
}

export function Heading({ level, children, className }: Props) {
  let elementType = 'h1'
  if (level === 2) elementType = 'h2'
  if (level === 3) elementType = 'h3'

  return createElement(
    elementType,
    {
      className: clsx(className, 'font-bold text-lg box-gray'),
    },
    children,
  )
}
