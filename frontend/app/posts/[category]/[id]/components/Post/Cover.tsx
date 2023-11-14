import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import type { Post } from '@types'
import { categories } from '@/data/categories'

type Props = {
  post: Post
}

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
  const lgTextClass = post.useToc ? 'lg:text-3xl' : 'lg:text-4xl'
  return (
    <div className={clsx('lg:h-full', 'bg-brightness-80')}>
      <div className="relative">
        <div className={clsx('absolute flex justify-center items-center w-full h-full')}>
          <div
            className={clsx(
              'flex justify-center items-center text-center p-3 bg-black bg-opacity-20 text-white font-bold text-2xl w-full',
              'md:text-3xl',
              lgTextClass,
            )}
          >
            <h1 className={clsx('mx-3 md:mx-5')}>{post.title}</h1>
          </div>
        </div>
        <Image src={`${post.cover}?q=50`} className="w-full" alt="cover" width={100} height={100} />
      </div>
      <Meta post={post} />
    </div>
  )
}
