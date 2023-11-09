'use client'

import { ElementType, JSX, createElement } from 'react'
import { useInView } from 'react-intersection-observer'
import clsx from 'clsx'

type Props = {
  children: JSX.Element[] | JSX.Element | any
  className?: string
  elementType?: ElementType
}

export function FadeInBox({ children, className, elementType = 'div' }: Props) {
  const { ref, inView } = useInView({ triggerOnce: true })
  const inViewContainerClass = inView ? 'before:animate-fadeInColor' : ''
  const inViewAfterClass = inView ? 'after:animate-growWidth' : 'after:w-0'
  const inViewBeforeClass = inView ? 'before:animate-growHeight' : 'before:h-0'
  const inViewInnerClass = inView ? 'animate-fadeIn' : 'opacity-0'

  return createElement(
    elementType,
    {
      className: clsx(
        className,
        inViewContainerClass,
        inViewAfterClass,
        inViewBeforeClass,
        'relative',
        'after:absolute after:border-y after:top-0 after:bottom-0 after:border-gray-500 after:translate-x-[-50%] after:left-[50%] box-content',
        'before:absolute before:border-x before:left-0 before:right-0 before:border-gray-500 before:translate-y-[-50%] before:top-[50%] box-content',
      ),
    },
    <div ref={ref} className={clsx(inViewInnerClass, 'h-full w-full')}>
      {children}
    </div>,
  )
}
