import clsx from 'clsx'
import { Post } from '@types'

type Props = {
  post: Post
}

export function Content({ post }: Props) {
  return (
    <article className={clsx('bg-brightness-80 p-4')}>
      <div className={clsx('md-content')} dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  )
}
