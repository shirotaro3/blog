import '@contentful/rich-text-types'
import { Post } from 'types'
import { getContentfulClient } from '../getContentfulClient'
import { formatPost } from './formatPost'

export const getPostById = async (id: string): Promise<Post> => {
  const client = getContentfulClient()
  const item = await client.getEntry(id)
  return formatPost(item)
}
