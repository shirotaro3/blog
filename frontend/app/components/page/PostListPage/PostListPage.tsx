import { Post } from 'types'
import { PostList } from '@/components/ui/PostList'
import { Profile } from '@/components/ui/Profile'

type Props = {
  headingText: string
  posts: Post[]
}
export function PostListPage({ headingText, posts }: Props) {
  return (
    <div className="flex flex-wrap gap-base justify-between">
      <PostList headingText={headingText} posts={posts} />
      <Profile />
    </div>
  )
}
