'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Image } from '../ImageWrapper'

type Props = {
  href: string
  text: string
  img: string
}

const getActiveClass = (linkPath: string, currentPath: string) => {
  let classes = ''
  if (linkPath === currentPath) classes += ` [&>span]:opacity-100 pointer-events-none`
  else if (currentPath.startsWith(linkPath)) classes += ' [&>span]:opacity-100'
  return classes
}

export function Building({ href, text, img }: Props) {
  const pathname = usePathname()

  return (
    <Link
      href={href}
      id={href}
      className={`inline-flex flex-col items-center gap-1 lg:hover:scale-110 lg:hover:-translate-y-0.5 [&:active>span]:opacity-100 active:scale-110 active:-translate-y-0.5 duration-100 ${getActiveClass(
        href,
        pathname,
      )}`}
    >
      <span className="text-xs md:text-sm bg-gray-700 opacity-50 md:opacity-70 font-bold text-white px-2 py-0.5 rounded duration-100">
        {text}
      </span>
      <Image
        className="inline-block w-[32px] opacity-90"
        src={img}
        alt=""
        width={100}
        height={100}
      />
    </Link>
  )
}
