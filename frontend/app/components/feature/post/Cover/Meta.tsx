import Link from 'next/link'
import clsx from 'clsx'
import type { Post } from 'types'
import { categories } from '@/data/categories'

type Props = {
  post: Post
}

export function Meta({ post }: Props) {
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
