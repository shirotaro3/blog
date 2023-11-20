import '@contentful/rich-text-types'
import { Post } from 'types'
import { buildClient } from './buildClient'
import { formatPost } from './formatPost'

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
