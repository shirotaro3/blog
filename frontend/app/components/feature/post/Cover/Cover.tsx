import Image from 'next/image'
import clsx from 'clsx'
import type { Post } from 'types'
import { Meta } from './Meta'

type Props = {
  post: Post
}

// カバー画像の最大幅
const POST_COVER_WIDTH = 800

export function Cover({ post }: Props) {
  // 画像サイズを最適化する
  const coverWidth = post.cover.width > POST_COVER_WIDTH ? POST_COVER_WIDTH : post.cover.width
  const coverHeight = post.cover.height * (coverWidth / post.cover.width)
  return (
    <div className={clsx('bg-brightness-80', 'lg:h-full')}>
      <div className="relative">
        <div className={clsx('absolute flex justify-center items-center w-full h-full')}>
          <div
            className={clsx(
              'flex justify-center items-center text-center px-3 h-24 bg-black bg-opacity-20 w-full',
              'md:h-40',
            )}
          >
            <h1
              className={clsx(
                'mx-3 drop-shadow-md text-white font-bold text-2xl',
                'md:mx-5 md:drop-shadow-lg md:text-4xl',
              )}
            >
              {post.title}
            </h1>
          </div>
        </div>
        <Image
          src={`${post.cover.url}?q=30&w=${coverWidth}&h=${coverHeight}&fm=webp`}
          className="w-full"
          alt="cover"
          width={coverWidth}
          height={coverHeight}
          priority={true}
        />
      </div>
      <Meta post={post} />
    </div>
  )
}
