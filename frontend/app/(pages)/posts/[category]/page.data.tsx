import { categories } from '@/data/categories'
import { config } from '@/data/siteConfig'

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

export async function generateStaticParams() {
  return Object.keys(categories).map((category) => ({ category }))
}
