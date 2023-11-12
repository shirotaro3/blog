import clsx from 'clsx'
import { Post } from '@types'

type Props = {
  post: Post
}

export function Content({ post }: Props) {
  return (
    <article className={clsx('box-white')}>
      <div className={clsx('md-content')} dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  )
}
