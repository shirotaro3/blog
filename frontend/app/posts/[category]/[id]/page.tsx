import { Profile } from '../../../_components/Profile'
import { Cover } from './Cover'
import { TableOfContent } from './TableOfContent'
import { Content } from './Content'
import { getAllPosts, getPostByCategoryAndId } from '@libs'
import { RootLayout } from '../../../_components/Layout'

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
        <TableOfContent html={post.html} />
        <Content html={post.html} />
        <Profile />
      </div>
    </RootLayout>
  )
}
