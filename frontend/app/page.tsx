import { PostList } from './_components/PostList'
import { Profile } from './_components/Profile'
import { getAllPosts } from './_libs/markdown'
import { RootLayout } from './_components/Layout'

export default async function Home() {
  const posts = await getAllPosts()

  return (
    <RootLayout>
      <div className="flex flex-wrap gap-base">
        <PostList headingText="新着記事" perPage={1} posts={posts} />
        <Profile />
      </div>
    </RootLayout>
  )
}
