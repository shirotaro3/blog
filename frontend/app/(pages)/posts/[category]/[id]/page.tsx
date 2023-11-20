import { Post } from '@/components/features/post/Post'
import { RootLayout } from '@/components/layout/RootLayout'
import { Profile } from '@/components/ui/Profile'
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
  return (
    <RootLayout>
      <article className="flex flex-wrap gap-base">
        <Post post={post} />
        <Profile />
      </article>
    </RootLayout>
  )
}
