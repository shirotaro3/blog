import clsx from 'clsx'
import type { Post } from '@types'
import { FadeInBox } from '@/components/ui/FadeInBox'
import { Content } from './Content'
import { Cover } from './Cover'
import { TableOfContent } from './TableOfContent'

type Props = {
  post: Post
}
export function PostSP({ post }: Props) {
  return (
    <FadeInBox className={clsx('w-full')}>
      <Cover post={post} />
      {post.toc && <TableOfContent headings={post.headings} toc={post.toc} />}
      <Content post={post} />
    </FadeInBox>
  )
}
