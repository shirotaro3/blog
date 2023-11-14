import '@contentful/rich-text-types'
import { createClient } from 'contentful'
import { Post } from '@types'
import { documentToContent } from './documentToContent'
import { documentToTableOfContent } from './documentToTableOfContent'

function buildClient() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || '',
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
  })
  return client
}

// あとで型ちゃんと定義する
function formatPost(post: any) {
  return {
    id: post.sys.id,
    title: post.fields.title,
    category: post.fields.category,
    description: post.fields.description,
    content: documentToContent(post.fields.content),
    toc: documentToTableOfContent(post.fields.content),
    cover: {
      url: post.fields.cover.fields.file.url,
      width: post.fields.cover.fields.file.details.image.width,
      height: post.fields.cover.fields.file.details.image.height,
    },
    date: post.fields.date,
    lastUpdated: post.fields.lastUpdated,
    useToc: post.fields.useToc,
  }
}

const formatPosts = (posts: any) => {
  return posts.map((post: any) => formatPost(post))
}

export const getAllPosts = async (): Promise<Post[]> => {
  const client = buildClient()
  const { items } = await client.getEntries({
    content_type: 'post',
  })
  return formatPosts(items)
}

export const getPostsByCategory = async (category: string): Promise<Post[]> => {
  const client = buildClient()
  const { items } = await client.getEntries({
    content_type: 'post',
    'fields.category': category,
  })
  return formatPosts(items)
}

export const getPostById = async (id: string): Promise<Post> => {
  const client = buildClient()
  const item = await client.getEntry(id)
  return formatPost(item)
}
