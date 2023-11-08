import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'
import { unified } from 'unified'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import rehypeShiki from '@leafac/rehype-shiki'
import { getHighlighter } from 'shiki'

let p: ReturnType<typeof getParserPre> | undefined

async function getParserPre() {
  return unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(remarkGfm)
    .use(rehypeShiki as any, {
      highlighter: await getHighlighter({ theme: 'nord' }),
    })
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, {
      content: (arg) => ({
        type: 'element',
        tagName: 'a',
        properties: { href: `#${arg.properties?.id}` },
        children: [{ type: 'text', value: '#' }],
      }),
    })
}

function getParser() {
  if (!p) {
    p = getParserPre().catch((e) => {
      p = undefined
      throw e
    })
  }
  return p
}

export async function getPostByCategoryAndId(category: string, id: string) {
  const realId = id.replace(/\.md$/, '')
  const fullPath = join(process.cwd(), 'app', '_data', 'posts', category, `${realId}.md`)
  const { data, content } = matter(await fs.promises.readFile(fullPath, 'utf8'))

  const parser = await getParser()
  const html = await parser.process(content)

  return {
    ...data,
    title: data.title,
    id: realId,
    category: category,
    cover: data.cover,
    date: `${new Date(data.date)?.toISOString().slice(0, 10)}`,
    html: html.value.toString(),
  }
}

export async function getPostsByCategory(category: string) {
  const path = join(process.cwd(), 'app', '_data', 'posts', category)
  const posts = await Promise.all(
    fs.readdirSync(path).map((id) => getPostByCategoryAndId(category, id)),
  )
  return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
}

export async function getAllPosts() {
  const path = join(process.cwd(), 'app', '_data', 'posts')
  const posts = await Promise.all(
    fs.readdirSync(path).flatMap((category) => {
      const ids = fs.readdirSync(join(process.cwd(), 'app', '_data', 'posts', category))
      return ids.map((id) => getPostByCategoryAndId(category, id))
    }),
  )
  return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
}
