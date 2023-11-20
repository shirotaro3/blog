import { site } from '@/data/site'

export async function generateMetadata() {
  return {
    title: site.title,
    description: site.description,
    openGraph: {
      title: site.title,
      description: site.description,
      // image: `${site.url}/${post.cover}`,
      url: site.url,
      site_name: site.title,
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
