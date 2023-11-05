import { createElement } from "react"

type Props = {
  level: number
  children: any
  className?: string
}

export function Heading({ level, children, className }: Props) {
  const classNames = [
    'font-bold',
    'text-lg',
  ]
  if (className) classNames.push(className)

  let elementType = 'h1'
  if (level === 2) elementType = 'h2'
  if (level === 3) elementType = 'h3'

  return createElement(
    elementType,
    {
      className: classNames.join(' '),
    },
    [...children]
  )
}