import { PostPage } from '@/components/page/PostPage'
import { getPostById } from '@/libs/contentful'

export { generateMetadata, generateStaticParams } from './page.data'

type Props = {
  params: {
    category: string
    id: string
  }
}

export default async function Blog({ params: { id } }: Props) {
  const post = await getPostById(id)

  return <PostPage post={post} />
}
