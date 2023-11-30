import { Post } from 'types'
import { PostList } from '@/components/feature/post/PostList'
import { Profile } from '@/components/ui/Profile'

type Props = {
  posts: Post[]
}

export function TopPage({ posts }: Props) {
  return (
    <div className="flex flex-wrap gap-base">
      <PostList headingText="新着記事" perPage={3} posts={posts} />
      <Profile />
    </div>
  )
}
