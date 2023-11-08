import { PostList } from './_components/PostList'
import { Profile } from './_components/Profile'
import { getAllPosts } from './_libs/markdown'

export default async function Home() {
  const posts = await getAllPosts()

  return (
    <div className="flex flex-wrap base-gap">
      <PostList headingText="新着記事" perPage={1} posts={posts} />
      <Profile />
    </div>
  )
}
