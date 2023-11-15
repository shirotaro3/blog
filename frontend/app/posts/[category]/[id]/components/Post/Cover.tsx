import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import type { Post } from '@types'
import { categories } from '@/data/categories'

type Props = {
  post: Post
}

// カバー画像の最大幅
const POST_COVER_WIDTH = 800

function Meta({ post }: Props) {
  return (
    <ul
      className={clsx(
        'text-xs p-4 flex flex-wrap justify-end gap-x-2',
        'md:text-sm',
        '[&>dt]:pl-3',
      )}
    >
      <li className={clsx('text-grayscale-500')}>作成:{post.date}</li>
      <li className={clsx('text-grayscale-500')}>最終更新:{post.lastUpdated}</li>
      <li className={clsx('w-full text-right')}>
        📂{' '}
        <Link href={`/posts/${post.category}`} className={clsx('link')}>
          {categories[post.category]}
        </Link>
      </li>
    </ul>
  )
}

export function Cover({ post }: Props) {
  // 画像サイズを最適化する
  const coverWidth = post.cover.width > POST_COVER_WIDTH ? POST_COVER_WIDTH : post.cover.width
  const coverHeight = post.cover.height * (coverWidth / post.cover.width)
  return (
    <div className={clsx('lg:h-full', 'bg-brightness-80')}>
      <div className="relative">
        <div className={clsx('absolute flex justify-center items-center w-full h-full')}>
          <div
            className={clsx(
              'flex justify-center items-center text-center p-3 bg-black bg-opacity-20 text-white font-bold text-2xl w-full',
              'md:text-3xl',
              post.useToc ? 'lg:text-3xl' : 'lg:text-4xl',
            )}
          >
            <h1 className={clsx('mx-3 md:mx-5')}>{post.title}</h1>
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
