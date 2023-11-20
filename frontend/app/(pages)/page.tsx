import { RootLayout } from '@/components/layout/RootLayout'
import { PostList } from '@/components/ui/PostList'
import { Profile } from '@/components/ui/Profile'
import { getAllPosts } from '@/libs/contentful'

export { generateMetadata } from './page.data'

export default async function Home() {
  const posts = await getAllPosts()

  return (
    <RootLayout>
      <div className="flex flex-wrap gap-base">
        <PostList headingText="新着記事" perPage={3} posts={posts} />
        <Profile />
      </div>
    </RootLayout>
  )
}
