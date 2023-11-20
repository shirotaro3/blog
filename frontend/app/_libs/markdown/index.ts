// 使ってないけど一応残しておく

// import rehypeShiki from '@leafac/rehype-shiki'
// import fs from 'fs'
// import matter from 'gray-matter'
// import { join } from 'path'
// import rehypeAutolinkHeadings from 'rehype-autolink-headings'
// import rehypeSlug from 'rehype-slug'
// import rehypeStringify from 'rehype-stringify'
// import remarkGfm from 'remark-gfm'
// import remarkParse from 'remark-parse'
// import remarkRehype from 'remark-rehype'
// import { getHighlighter } from 'shiki'
// import { unified } from 'unified'
// import { VFileWithOutput } from 'unified/lib'

// let p: ReturnType<typeof getParserPre> | undefined

// function remarkHeadings() {
//   return (tree: any, file: VFileWithOutput<any>) => {
//     const headings = tree.children
//       .filter((node: any) => {
//         return node.type === 'heading'
//       })
//       .map((node: any) => {
//         return {
//           depth: node.depth,
//           text: node.children
//             .filter((node: any) => {
//               return node.type === 'text'
//             })
//             .map((node: any) => {
//               return node.value
//             })
//             .join(''),
//         }
//       })
//     file.data.headings = headings
//   }
// }

// async function getParserPre() {
//   return unified()
//     .use(remarkParse)
//     .use(remarkHeadings)
//     .use(remarkRehype)
//     .use(remarkGfm)
//     .use(rehypeShiki as any, {
//       highlighter: await getHighlighter({ theme: 'nord' }),
//     })
//     .use(rehypeStringify)
//     .use(rehypeSlug)
//     .use(rehypeAutolinkHeadings, {
//       content: (arg) => ({
//         type: 'element',
//         tagName: 'a',
//         properties: { href: `#${arg.properties?.id}` },
//         children: [{ type: 'text', value: '#' }],
//       }),
//     })
// }

// function getParser() {
//   if (!p) {
//     p = getParserPre().catch((e) => {
//       p = undefined
//       throw e
//     })
//   }
//   return p
// }

// export async function getPostByCategoryAndId(category: string, id: string) {
//   const realId = id.replace(/\.md$/, '')
//   const fullPath = join(process.cwd(), 'app', '_data', 'posts', category, `${realId}.md`)
//   const { data, content } = matter(await fs.promises.readFile(fullPath, 'utf8'))

//   const parser = await getParser()
//   const html = await parser.process(content)

//   return {
//     ...data,
//     id: realId,
//     title: data.title,
//     description: data.description,
//     category: category,
//     cover: data.cover,
//     date: data.date,
//     lastUpdated: data.lastUpdated,
//     toc: data.toc,
//     html: html.value.toString(),
//     headings: html.data.headings as { depth: number; text: string }[], // TODO
//   }
// }

// export async function getPostsByCategory(category: string) {
//   const path = join(process.cwd(), 'app', '_data', 'posts', category)
//   try {
//     const posts = await Promise.all(
//       fs.readdirSync(path).map((id) => getPostByCategoryAndId(category, id)),
//     )
//     return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
//   } catch (error) {
//     console.warn(error)
//     return []
//   }
// }

// export async function getAllPosts() {
//   const path = join(process.cwd(), 'app', '_data', 'posts')
//   try {
//     const posts = await Promise.all(
//       fs.readdirSync(path).flatMap((category) => {
//         const ids = fs.readdirSync(join(process.cwd(), 'app', '_data', 'posts', category))
//         return ids.map((id) => getPostByCategoryAndId(category, id))
//       }),
//     )
//     return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
//   } catch (error) {
//     console.warn(error)
//     return []
//   }
// }