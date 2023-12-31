import '@contentful/rich-text-types'
import { Post } from 'types'
import { getContentfulClient } from './getContentfulClient'
import { PostSkeleton } from './types/postSkeleton'
import { formatPost } from './utils'

export const getPostById = async (id: string): Promise<Post> => {
  const client = getContentfulClient()
  const item = await client.withoutUnresolvableLinks.getEntry<PostSkeleton>(id)
  return formatPost(item)
}
