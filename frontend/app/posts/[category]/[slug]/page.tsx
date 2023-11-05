import { FadeInBox } from '../../../_components/FadeInBox'
import { Profile } from '../../../_components/Profile'
import { POSTS_DIR } from '../../../_consts/dataDir'
import { Post } from '../../../_data/posts/types'
import { listFiles } from '../../../_functions/listFiles'
import { getFileContent } from '../../../_functions/getFileContent'
import { Cover } from './Cover'
import { TableOfContent } from './TableOfContent'
import { Content } from './Content'

export function generateStaticParams() {
  const filePaths = listFiles(POSTS_DIR, '.md')
  const params = filePaths.map((filePath) => {
    const [category, slug] = filePath.replace(`${POSTS_DIR}/`, '').replace(/\.md$/, '').split('/')
    return {
      category,
      slug,
    }
  })
  return params
}

export default function Blog({ params: { category, slug } }: any) {
  if (slug.endsWith('.js')) return null // なんか知らんけど入ってくるので
  const filePath = `${POSTS_DIR}/${category}/${slug}.md`
  const { data, content }: Post = getFileContent(filePath)

  return (
    <div className="flex flex-wrap base-gap">
      <Cover data={data} />
      <TableOfContent content={content} />
      <Content content={content} />
      <Profile />
    </div>
  )
}
