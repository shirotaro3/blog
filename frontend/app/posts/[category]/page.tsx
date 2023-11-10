import { RootLayout } from '@/components/Layout'
import { PostList } from '@/components/PostList'
import { Profile } from '@/components/Profile'
import { config } from '@/data/siteConfig'
import { getAllPosts, getPostsByCategory } from '@/libs/markdown'

export async function generateStaticParams() {
  const posts = await getAllPosts()
  const categories = Array.from(new Set(posts.map((post) => post.category)))
  return categories.map((category) => ({ category }))
}

export async function generateMetadata({ params: { category } }: any) {
  const title = getHeadingTextByCategory(category)
  return {
    title: `${title} | ${config.SITE_TITLE}`,
    description: config.SITE_DESCRIPTION,
    // image: `${config.SITE_URL}/${post.cover}`,
    'og:title': title,
    'og:description': config.SITE_DESCRIPTION,
    // 'og:image': `${config.SITE_URL}/${post.cover}`,
    'og:url': `${config.SITE_URL}/posts/${category}`,
    'og:site_name': config.SITE_TITLE,
    'twitter:card': 'summary_large_image',
  }
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
