import { createElement } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import type { Post } from '@types'
import { FadeInBox } from '@/components/ui/FadeInBox'
import { categories } from '@/data/categories'

type Props = {
  post: Post
}

export function Card({ post }: Props) {
  const pathname = usePathname()
  const headingLevel = pathname === '/' ? 3 : 2
  return (
    <li className={clsx('w-1col')}>
      <FadeInBox>
        <Link
          href={`/posts/${post.category}/${post.id}`}
          className={clsx(
            'block transition border overflow-hidden duration-300 bg-white',
            'lg:[&:hover_.card-cover]:scale-110 lg:opacity-90 lg:hover:border-grayscale-400 lg:hover:opacity-100',
          )}
        >
          <div className={clsx('overflow-hidden', 'md:h-[200px]')}>
            <div className={clsx('card-cover duration-300 relative')}>
              <div className={clsx('absolute flex justify-center items-center w-full h-full')}>
                <div
                  className={clsx(
                    'flex justify-center items-center text-center p-3 bg-black bg-opacity-20 text-white font-bold text-xl w-full',
                  )}
                >
                  <div className={clsx('mx-5')}>{post.title}</div>
                </div>
              </div>
              <Image
                src={`${post.cover}?q=50`}
                className={clsx('w-full md:h-[200px]')}
                alt="cover image"
                priority={true}
                width={400}
                height={363}
              />
            </div>
          </div>
          <div className={clsx('p-4')}>
            {createElement(`h${headingLevel}`, {}, post.title)}
            <div className={clsx('flex justify-between items-center text-sm')}>
              <span className={clsx('text-grayscale-500')}>{post.date}</span>
              <span className={clsx('text-xs')}>📂 {categories[post.category]}</span>
            </div>
          </div>
        </Link>
      </FadeInBox>
    </li>
  )
}
