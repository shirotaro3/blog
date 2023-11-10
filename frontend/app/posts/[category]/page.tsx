import { Profile } from '@/components/Profile'
import { PostList } from '@/components/PostList'
import { getAllPosts, getPostsByCategory } from '@/libs/markdown'
import { RootLayout } from '@/components/Layout'

export async function generateStaticParams() {
  const posts = await getAllPosts()
  const categories = Array.from(new Set(posts.map((post) => post.category)))
  return categories.map((category) => ({ category }))
}

function getHeadingTextByCategory(category: string) {
  let headingText = ''
  if (category === 'tech') headingText = '技術 に関する記事'
  if (category === 'travel') headingText = '旅行 に関する記事'
  if (category === 'portfolio') headingText = 'ポートフォリオ'
  return headingText
}

export default async function Blog({ params: { category } }: any) {
  const posts = await getPostsByCategory(category)
  const headingText = getHeadingTextByCategory(category)

  return (
    <RootLayout>
      <div className="flex flex-wrap gap-base justify-between">
        <PostList headingText={headingText} posts={posts} />
        <Profile />
      </div>
    </RootLayout>
  )
}
