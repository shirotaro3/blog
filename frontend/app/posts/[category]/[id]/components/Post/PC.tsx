import clsx from 'clsx'
import type { Post } from '@types'
import { FadeInBox } from '@/components/ui/FadeInBox'
import { Content } from './Content'
import { Cover } from './Cover'
import { TableOfContent } from './TableOfContent'

type Props = {
  post: Post
}
export function PostPC({ post }: Props) {
  const coverClass = post.toc ? 'w-2col-md' : 'w-full'
  return (
    <>
      <FadeInBox className={clsx(coverClass)}>
        <Cover post={post} />
      </FadeInBox>
      {post.toc && (
        <FadeInBox className={clsx('w-1col-md')}>
          <TableOfContent headings={post.headings} toc={post.toc} />
        </FadeInBox>
      )}
      <FadeInBox className={clsx('w-full')}>
        <Content post={post} />
      </FadeInBox>
    </>
  )
}
