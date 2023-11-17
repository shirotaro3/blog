import clsx from 'clsx'
import type { Post } from '@types'
import { FadeInObserver } from '@/components/ui/FadeInObserver'
import { Content } from './Content'
import { Cover } from './Cover'
import { TableOfContent } from './TableOfContent'

type Props = {
  post: Post
}
export function PostSP({ post }: Props) {
  return (
    <FadeInObserver className={clsx('w-full')}>
      <Cover post={post} />
      {post.useToc && <TableOfContent reactNode={post.toc} />}
      <Content reactNode={post.content} />
    </FadeInObserver>
  )
}
