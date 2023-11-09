'use client'

import type { Post } from '@types'
import Link from 'next/link'
import clsx from 'clsx'
import { Image } from '@/components/ImageWrapper'
import { FadeInBox } from '@/components/FadeInBox'

type Props = {
  post: Post
}

const DEFAULT_COVER_PATH = '/cover/sea.webp'

export function Card({ post }: Props) {
  return (
    <FadeInBox className={clsx('w-1col')}>
      <Link
        href={`/posts/${post.category}/${post.id}`}
        className={clsx(
          'block transition border overflow-hidden duration-300 bg-white',
          'lg:[&:hover_.card-cover]:scale-110 lg:opacity-70 lg:hover:border-gray-400 lg:hover:opacity-100',
        )}
      >
        <div className={clsx('h-[200px] overflow-hidden')}>
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
              className={clsx('w-full h-[200px]')}
              alt="cover image"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className={clsx('p-4')}>
          <h3 className={clsx('hidden md:block')}>{post.title}</h3>
          <span className={clsx('text-sm text-gray-500')}>{post.date}</span>
        </div>
      </Link>
    </FadeInBox>
  )
}
