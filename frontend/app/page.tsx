import { RootLayout } from '@/components/layout/RootLayout'
import { PostList } from '@/components/ui/PostList'
import { Profile } from '@/components/ui/Profile'
import { config } from '@/data/siteConfig'
import { getAllPosts } from '@/libs/contentful'

export async function generateMetadata() {
  return {
    title: config.SITE_TITLE,
    description: config.SITE_DESCRIPTION,
    openGraph: {
      title: config.SITE_TITLE,
      description: config.SITE_DESCRIPTION,
      // image: `${config.SITE_URL}/${post.cover}`,
      url: config.SITE_URL,
      site_name: config.SITE_TITLE,
    },
    // TODO: ここだけpreconnect効かない
    icons: {
      other: {
        rel: 'preconnect',
        url: 'https://images.ctfassets.net',
      },
    },
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
