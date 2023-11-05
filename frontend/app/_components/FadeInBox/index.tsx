'use client'

import { ComponentProps } from "react"
import { useInView } from "react-intersection-observer"

type Props = ComponentProps<'div'>

export function FadeInBox({ children, className }: Props) {
  const { ref, inView } = useInView({ triggerOnce: true })
  const classNames = [inView ? 'animate-fadeIn' : 'opacity-0']
  if (className) {
    classNames.push(className)
  }

  return (
    <div ref={ref} className={classNames.join(' ')}>
      {children}
    </div>
  )
}