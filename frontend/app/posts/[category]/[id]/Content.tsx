import clsx from 'clsx'
import { Post } from '@types'
import { FadeInBox } from '@/components/FadeInBox'

type Props = {
  post: Post
}

export function Content({ post }: Props) {
  return (
    <FadeInBox className={clsx('w-full -mt-5', 'after:lg-only-border-t', 'lg:mt-0')}>
      <article className={clsx('bg-brightness-80 p-4')}>
        <div className={clsx('md-content')} dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </FadeInBox>
  )
}
