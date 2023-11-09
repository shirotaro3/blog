import { Profile } from '../../_components/Profile'
import { PostList } from '../../_components/PostList'
import { getAllPosts, getPostsByCategory } from '@libs'
import { RootLayout } from '../../_components/Layout'

export async function generateStaticParams() {
  const posts = await getAllPosts()
  const categories = Array.from(new Set(posts.map((post) => post.category)))
  return categories.map((category) => ({ category }))
}

function getHeadingTextByCategory(category: string) {
  let headingText = ''
  if (category === 'tech') headingText = '技術 に関する記事'
  if (category === 'life') headingText = '暮らし に関する記事'
  if (category === 'portfolio') headingText = 'ポートフォリオ'
  return headingText
}

export default async function Blog({ params: { category } }: any) {
  const posts = await getPostsByCategory(category)
  const headingText = getHeadingTextByCategory(category)

  return (
    <RootLayout>
      <div className="flex flex-wrap gap-base">
        <PostList headingText={headingText} posts={posts} />
        <Profile />
      </div>
    </RootLayout>
  )
}
