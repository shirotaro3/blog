import { ComponentProps } from "react"
import Link from "next/link"
import { useInView } from "react-intersection-observer"

type Props = ComponentProps<'a'> & { href: string, size?: 'sm' | 'lg', variant?: 'primary' | 'secondary' }

export function LinkButton({ children, href, size = 'lg', variant = 'primary' }: Props) {
  const { ref, inView } = useInView({ triggerOnce: true })
  const inViewClass = inView ? 'animate-fadeIn' : 'opacity-0'
  const sizeClass = size === 'lg' ? 'button-lg' : 'button-sm'
  const variantClass = variant === 'primary' ? 'button-primary' : 'button-secondary'

  return (
    <Link ref={ref} className={`button ${variantClass} ${inViewClass} ${sizeClass}`} href={href}>
      {children}
    </Link>
  )
}