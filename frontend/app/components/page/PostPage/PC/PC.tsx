import clsx from 'clsx'
import type { Post } from 'types'
import { Content } from '@/components/feature/post/Content'
import { Cover } from '@/components/feature/post/Cover'
import { TableOfContent } from '@/components/feature/post/TableOfContent'
import { FadeInObserver } from '@/components/ui/FadeInObserver'
import { Profile } from '@/components/ui/Profile'

type Props = {
  post: Post
}
export function PostPC({ post }: Props) {
  const coverClass = post.useToc ? 'w-2col-md' : 'w-full'
  return (
    <article className="flex flex-wrap gap-base">
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
      <Profile />
    </article>
  )
}
