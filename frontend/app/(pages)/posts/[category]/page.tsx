import { PostListPage } from '@/components/page/PostListPage'
import { categories } from '@/data/categories'
import { getPostsByCategory } from '@/libs/contentful'

export { generateMetadata, generateStaticParams } from './page.data'

type Props = {
  params: {
    category: string
  }
}

export default async function Blog({ params: { category } }: Props) {
  const posts = await getPostsByCategory(category)
  const headingText = `${categories[category]} に関する記事`

  return <PostListPage posts={posts} headingText={headingText} />
}
