import { RootLayout } from '@/components/Layout'
import { Profile } from '@/components/Profile'
import { config } from '@/data/siteConfig'
import { getAllPosts, getPostByCategoryAndId } from '@/libs/markdown'
import { Post } from './Post'

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({ category: post.category, id: post.id }))
}

export async function generateMetadata({ params: { category, id } }: any) {
  const post = await getPostByCategoryAndId(category, id)
  return {
    title: `${post.title} | ${config.SITE_TITLE}`,
    description: post.description,
    image: `${config.SITE_URL}/${post.cover}`,
    'og:title': post.title,
    'og:description': post.description,
    'og:image': `${config.SITE_URL}/${post.cover}`,
    'og:url': `${config.SITE_URL}/posts/${category}/${id}`,
    'og:site_name': config.SITE_TITLE,
    'twitter:card': 'summary_large_image',
  }
}

export default async function Blog({
  params: { category, id },
}: {
  params: { category: string; id: string }
}) {
  const post = await getPostByCategoryAndId(category, id)
  return (
    <RootLayout>
      <div className="flex flex-wrap gap-base">
        <Post post={post} />
        <Profile />
      </div>
    </RootLayout>
  )
}
