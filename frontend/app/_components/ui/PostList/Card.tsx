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

// カバー画像の最大幅
const POST_COVER_WIDTH = 740

export function Card({ post }: Props) {
  const pathname = usePathname()
  const headingLevel = pathname === '/' ? 3 : 2
  // 画像サイズを最適化する
  const coverWidth = post.cover.width > POST_COVER_WIDTH ? POST_COVER_WIDTH : post.cover.width
  const coverHeight = post.cover.height * (coverWidth / post.cover.width)
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
          <div className={clsx('overflow-hidden relative')}>
            <div className={clsx('card-cover duration-300', 'md:h-[190px]')}>
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
                src={`${post.cover.url}?q=20&w=${coverWidth}&h=${coverHeight}`}
                className={clsx('w-full object-cover')}
                alt="cover image"
                priority={true}
                width={coverWidth}
                height={coverHeight}
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
