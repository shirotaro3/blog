import { PostList } from '@/components/PostList'
import { Profile } from '@/components/Profile'
import { RootLayout } from '@/components/Layout'
import { getAllPosts } from '@/libs/markdown'

export default async function Home() {
  const posts = await getAllPosts()

  return (
    <RootLayout>
      <div className="flex flex-wrap gap-base">
        <PostList headingText="新着記事" perPage={6} posts={posts} />
        <Profile />
      </div>
    </RootLayout>
  )
}
