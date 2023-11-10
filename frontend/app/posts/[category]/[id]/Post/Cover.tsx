import Link from 'next/link'
import clsx from 'clsx'
import type { Post } from '@types'
import { Image } from '@/components/Image'
import { categories } from '@/data/categories'

type Props = {
  post: Post
}

function Meta({ post }: Props) {
  return (
    <ul
      className={clsx(
        'text-xs bg-brightness-80 p-4 flex flex-wrap justify-end gap-x-2',
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
  const lgTextClass = post.toc ? 'lg:text-3xl' : 'lg:text-4xl'
  return (
    <>
      <div className="relative">
        <div className={clsx('absolute flex justify-center items-center w-full h-full')}>
          <div
            className={clsx(
              'flex justify-center items-center text-center p-3 bg-black bg-opacity-20 text-white font-bold text-2xl w-full',
              'md:text-3xl',
              lgTextClass,
            )}
          >
            <div className={clsx('mx-3 md:mx-5')}>{post.title}</div>
          </div>
        </div>
        <Image src={post.cover} className="w-full" alt="cover" />
      </div>
      <Meta post={post} />
    </>
  )
}
