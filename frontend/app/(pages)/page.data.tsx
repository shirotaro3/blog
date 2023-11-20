import { config } from '@/data/siteConfig'

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
