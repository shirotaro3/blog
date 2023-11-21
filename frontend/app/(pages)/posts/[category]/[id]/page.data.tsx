import { site } from '@/data/site'
import { getPostById, getAllPosts } from '@/libs/contentful'

type Props = {
  params: {
    category: string
    id: string
  }
}

export async function generateMetadata({ params: { category, id } }: Props) {
  const post = await getPostById(id)
  return {
    title: `${post.title} | ${site.title}`,
    description: post.description,
    image: `${site.url}/${post.cover}?w=1200&h=630&fit=pad&bg=rgb:ffffff`,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [
        {
          url: `${site.url}/${post.cover}?w=800&h=600&fit=pad&bg=rgb:ffffff`,
          width: 800,
          height: 600,
          alt: post.title,
        },
      ],
      url: `${site.url}/posts/${category}/${id}`,
      site_name: site.title,
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
