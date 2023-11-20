import { config } from '@/data/siteConfig'
import { getPostById, getAllPosts } from '@/libs/contentful'

export async function generateMetadata({ params: { category, id } }: any) {
  const post = await getPostById(id)
  return {
    title: `${post.title} | ${config.SITE_TITLE}`,
    description: post.description,
    image: `${config.SITE_URL}/${post.cover}?w=1200&h=630&fit=pad&bg=rgb:ffffff`,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [
        {
          url: `${config.SITE_URL}/${post.cover}?w=800&h=600&fit=pad&bg=rgb:ffffff`,
          width: 800,
          height: 600,
          alt: post.title,
        },
      ],
      url: `${config.SITE_URL}/posts/${category}/${id}`,
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

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({ category: post.category, id: post.id }))
}
