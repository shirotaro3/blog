import clsx from 'clsx'
import type { Post } from '@types'
import { FadeInObserver } from '@/components/ui/FadeInObserver'
import { Content } from './Content'
import { Cover } from './Cover'
import { TableOfContent } from './TableOfContent'

type Props = {
  post: Post
}
export function PostPC({ post }: Props) {
  const coverClass = post.useToc ? 'w-2col-md' : 'w-full'
  return (
    <>
      <FadeInObserver className={clsx(coverClass)}>
        <Cover post={post} />
      </FadeInObserver>
      {post.useToc && (
        <FadeInObserver className={clsx('w-1col-md')}>
          <TableOfContent reactNode={post.toc} />
        </FadeInObserver>
      )}
      <FadeInObserver className={clsx('w-full')}>
        <Content reactNode={post.content} />
      </FadeInObserver>
    </>
  )
}
