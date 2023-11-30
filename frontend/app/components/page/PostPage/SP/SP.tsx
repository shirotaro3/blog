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
export function PostSP({ post }: Props) {
  return (
    <article className="flex flex-wrap gap-base">
      <FadeInObserver className={clsx('w-full')}>
        <Cover post={post} />
        {post.useToc && <TableOfContent reactNode={post.toc} />}
        <Content reactNode={post.content} />
      </FadeInObserver>
      <Profile />
    </article>
  )
}
