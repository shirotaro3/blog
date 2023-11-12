import Link from 'next/link'
import clsx from 'clsx'

type Props = {
  heading: string
  links: {
    href: string
    text: string
  }[]
}

export function MenuLinks({ heading, links }: Props) {
  return (
    <div className={clsx('p-4 border border-grayscale-400')}>
      <div className={clsx('font-bold')}>{heading}</div>
      <ul className={clsx('h-20')}>
        {links.map(({ href, text }) => (
          <li key={href}>
            <Link href={href} className={clsx('link')}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
