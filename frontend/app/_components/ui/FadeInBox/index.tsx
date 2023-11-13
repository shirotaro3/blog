'use client'

import { ComponentProps } from 'react'
import clsx from 'clsx'
import { useInView } from 'react-intersection-observer'

type Props = ComponentProps<'div'> & { variant?: 'normal' | 'invert' }

const variants = {
  normal: 'after:border-black before:border-black',
  invert: 'after:border-white before:border-white',
}

export function FadeInBox({ children, className, variant = 'normal' }: Props) {
  const { ref, inView } = useInView({ triggerOnce: true })
  const inViewOuterClass = inView
    ? 'after:animate-growWidth before:animate-growHeight'
    : 'after:w-0 before:h-0'
  const inViewInnerClass = inView ? 'animate-fadeIn' : 'opacity-0'
  const variantClass = variants[variant]

  return (
    <div
      className={clsx(
        className,
        inViewOuterClass,
        variantClass,
        'relative',
        'after:absolute after:border-y after:top-0 after:bottom-0 after:translate-x-[-50%] after:left-[50%] box-content',
        'before:absolute before:border-x before:left-0 before:right-0 before:translate-y-[-50%] before:top-[50%] box-content',
      )}
    >
      <div ref={ref} className={clsx(inViewInnerClass, 'h-full w-full')}>
        {children}
      </div>
    </div>
  )
}
