import { Profile } from '@/components/Profile'
import { getAllPosts, getPostByCategoryAndId } from '@/libs/markdown'
import { RootLayout } from '@/components/Layout'
import { Cover } from './Cover'
import { TableOfContent } from './TableOfContent'
import { Content } from './Content'

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({ category: post.category, id: post.id }))
}

export default async function Blog({
  params: { category, id },
}: {
  params: { category: string; id: string }
}) {
  const post = await getPostByCategoryAndId(category, id)
  return (
    <RootLayout>
      <div className="flex flex-wrap gap-base">
        <Cover post={post} />
        <TableOfContent headings={post.headings} toc={post.toc} />
        <Content post={post} />
        <Profile />
      </div>
    </RootLayout>
  )
}
