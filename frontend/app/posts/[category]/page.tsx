import { RootLayout } from '@/components/layout/RootLayout'
import { PostList } from '@/components/ui/PostList'
import { Profile } from '@/components/ui/Profile'
import { categories } from '@/data/categories'
import { config } from '@/data/siteConfig'
import { getPostsByCategory } from '@/libs/contentful'

export async function generateStaticParams() {
  return Object.keys(categories).map((category) => ({ category }))
}

export async function generateMetadata({ params: { category } }: any) {
  const title = `${categories[category]} に関する記事`
  return {
    title: `${title} | ${config.SITE_TITLE}`,
    description: config.SITE_DESCRIPTION,
    openGraph: {
      title,
      // image: `${config.SITE_URL}/${post.cover}`,
      description: config.SITE_DESCRIPTION,
      url: `${config.SITE_URL}/posts/${category}`,
      site_name: config.SITE_TITLE,
    },
    icons: {
      other: {
        rel: 'preconnect',
        url: 'https://images.ctfassets.net',
      },
    },
  }
}

export default async function Blog({ params: { category } }: any) {
  const posts = await getPostsByCategory(category)
  const headingText = `${categories[category]} に関する記事`

  return (
    <RootLayout>
      <div className="flex flex-wrap gap-base justify-between">
        <PostList headingText={headingText} posts={posts} />
        <Profile />
      </div>
    </RootLayout>
  )
}
