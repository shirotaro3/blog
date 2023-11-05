import { ComponentProps } from "react"
import { useInView } from "react-intersection-observer"

type Props = ComponentProps<'button'> & { size?: 'sm' | 'lg' }

export function Button({ children, onClick, size = 'lg' }: Props) {
  const { ref, inView } = useInView({ triggerOnce: true })
  const inViewClass = inView ? 'animate-fadeIn' : 'opacity-0'
  const sizeClass = size === 'lg' ? 'button-lg' : 'button-sm'

  return (
    <button ref={ref} className={`button button-primary ${inViewClass} ${sizeClass}`} onClick={onClick}>
      {children}
    </button>
  )
}