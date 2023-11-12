import { RootLayout } from '@/components/Layout'
import { PostList } from '@/components/PostList'
import { Profile } from '@/components/Profile'
import { config } from '@/data/siteConfig'
import { getAllPosts } from '@/libs/markdown'

export async function generateMetadata() {
  return {
    title: config.SITE_TITLE,
    description: config.SITE_DESCRIPTION,
    // image: `${config.SITE_URL}/${post.cover}`,
    'og:title': config.SITE_TITLE,
    'og:description': config.SITE_DESCRIPTION,
    // 'og:image': `${config.SITE_URL}/${post.cover}`,
    'og:url': config.SITE_URL,
    'og:site_name': config.SITE_TITLE,
    'twitter:card': 'summary_large_image',
  }
}

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
