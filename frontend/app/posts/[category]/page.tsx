import { Profile } from '../../_components/Profile'
import { PostList } from '../../_features/PostList'
import { POSTS_DIR, DATA_DIR } from '../../_consts/dataDir'
import { Post } from '../../_data/posts/types'
import { getFileContent } from '../../_functions/getFileContent'
import { listDir } from '../../_functions/listDir'
import { listFiles } from '../../_functions/listFiles'
import { sortByDate } from '../../_functions/sortByDate'

export function generateStaticParams() {
  const dirPaths = listDir(POSTS_DIR)
  const params = dirPaths.map((dirPath) => ({ category: dirPath }))
  return params
}

export default function Blog({ params: { category } }: any) {
  if (category.endsWith('.js')) return null // なんか知らんけど入ってくるので

  let headingText = category
  if (category === 'tech') headingText = '技術 に関する記事'
  if (category === 'life') headingText = '暮らし に関する記事'
  if (category === 'portfolio') headingText = 'ポートフォリオ'

  const filePaths = listFiles(`${POSTS_DIR}/${category}`, '.md')
  const fileContents: Required<Post>[] = filePaths.map((filePath) => {
    return {
      ...getFileContent(filePath),
      path: filePath.replace(DATA_DIR, '').replace('.md', ''),
    }
  })
  const sorted = JSON.parse(JSON.stringify(sortByDate(fileContents))) // warn対策(Only plain objects can be passed to Client Components from Server Components.)

  return (
    <div className="flex flex-wrap base-gap">
      <PostList headingText={headingText} posts={sorted} />
      <Profile />
    </div>
  )
}
