import Link from 'next/link'
import clsx from 'clsx'
import type { Post } from '@types'
import { FadeInBox } from '@/components/ui/FadeInBox'
import { Image } from '@/components/ui/Image'
import { categories } from '@/data/categories'

type Props = {
  post: Post
}

const DEFAULT_COVER_PATH = '/post/travel/hokkaido1/clark.webp'

export function Card({ post }: Props) {
  return (
    <FadeInBox className={clsx('w-1col')}>
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
              src={post.cover || DEFAULT_COVER_PATH}
              className={clsx('w-full md:h-[200px]')}
              alt="cover image"
            />
          </div>
        </div>
        <div className={clsx('p-4')}>
          <h3>{post.title}</h3>
          <div className={clsx('flex justify-between items-center text-sm')}>
            <span className={clsx('text-grayscale-500')}>{post.date}</span>
            <span className={clsx('text-xs')}>📂 {categories[post.category]}</span>
          </div>
        </div>
      </Link>
    </FadeInBox>
  )
}
