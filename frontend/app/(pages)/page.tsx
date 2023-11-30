import { TopPage } from '@/components/page/TopPage'
import { getAllPosts } from '@/libs/contentful'

export { generateMetadata } from './page.data'

export default async function Home() {
  const posts = await getAllPosts()

  return <TopPage posts={posts} />
}
