import { RootLayout } from '@/components/layout/RootLayout'
import { PostList } from '@/components/ui/PostList'
import { Profile } from '@/components/ui/Profile'
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

  return (
    <RootLayout>
      <div className="flex flex-wrap gap-base justify-between">
        <PostList headingText={headingText} posts={posts} />
        <Profile />
      </div>
    </RootLayout>
  )
}
