import clsx from 'clsx'
import type { Post } from '@types'
import Link from 'next/link'
import { FadeInBox } from '../../../_components/FadeInBox'
import { Image } from '../../../_components/ImageWrapper'
import { categories } from '@/data/categories'

type Props = {
  post: Post
}

function Meta({ post }: Props) {
  return (
    <ul
      className={clsx(
        'text-xs box-white flex flex-wrap justify-end gap-x-2',
        'md:text-sm',
        '[&>dt]:pl-3',
      )}
    >
      <li>作成:{post.date}</li>
      <li>最終更新:{post.lastUpdated}</li>
      <li className="w-full text-right">
        📂 <Link href={`/posts/${post.category}`}>{categories[post.category]}</Link>
      </li>
    </ul>
  )
}

export function Cover({ post }: Props) {
  const widthClass = post.toc ? 'w-2col-md' : 'w-full'
  const lgTextClass = post.toc ? 'lg:text-3xl' : 'lg:text-4xl'
  return (
    <FadeInBox className={clsx('after:!border-b-0', 'lg:after:!border-b', widthClass)}>
      <div className="relative">
        <div className={clsx('absolute flex justify-center items-center w-full h-full')}>
          <div
            className={clsx(
              'flex justify-center items-center text-center p-3 bg-black bg-opacity-20 text-white font-bold text-2xl w-full',
              'md:text-3xl',
              lgTextClass,
            )}
          >
            <div className="mx-3 md:mx-5">{post.title}</div>
          </div>
        </div>
        <Image src={post.cover} className="w-full" alt="cover" width={100} height={100} />
      </div>
      <Meta post={post} />
    </FadeInBox>
  )
}
