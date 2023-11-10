import { FadeInBox } from '@/components/FadeInBox'
import { Post } from '@types'
import clsx from 'clsx'

type Props = {
  post: Post
}

export function Content({ post }: Props) {
  return (
    <FadeInBox className={clsx('w-full -mt-5 after:!border-t-0', 'lg:m-0 lg:after:!border-t')}>
      <article className="box-white">
        <div className="md-content" dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </FadeInBox>
  )
}
