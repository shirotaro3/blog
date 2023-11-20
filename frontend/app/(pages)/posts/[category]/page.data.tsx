import { categories } from '@/data/categories'
import { site } from '@/data/site'

export async function generateMetadata({ params: { category } }: any) {
  const title = `${categories[category]} に関する記事`
  return {
    title: `${title} | ${site.title}`,
    description: site.description,
    openGraph: {
      title,
      // image: `${site.url}/${post.cover}`,
      description: site.description,
      url: `${site.url}/posts/${category}`,
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
  return Object.keys(categories).map((category) => ({ category }))
}
