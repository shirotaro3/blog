import { JSX } from 'react'
import clsx from 'clsx'
import { useInView } from 'react-intersection-observer'

type Props = {
  children: JSX.Element[]
}

export function MenuContainer({ children }: Props) {
  const { ref, inView } = useInView({ triggerOnce: true })
  const inViewOuterClass = inView
    ? clsx('animate-bgFadeIn', 'after:animate-growWidth', 'before:animate-growHeight')
    : clsx('bg-transparent', 'after:w-0', 'before:h-0')
  return (
    <div
      className={clsx(
        'fixed top-[var(--header)] bottom-auto base-container z-30',
        'lg:left-5 lg:right-5',
      )}
    >
      <div
        ref={ref}
        className={clsx(
          inViewOuterClass,
          'relative h-full w-full bg-brightness-80',
          'after:absolute after:border-y after:top-0 after:bottom-0 after:border-grayscale-500 after:translate-x-[-50%] after:left-[50%] box-content',
          'before:absolute before:border-x before:left-0 before:right-0 before:border-grayscale-500 before:translate-y-[-50%] before:top-[50%] box-content',
        )}
      >
        <div className={clsx('flex flex-wrap gap-4 p-4')}>{children}</div>
      </div>
    </div>
  )
}
