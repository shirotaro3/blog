import '@contentful/rich-text-types'
import { Post } from 'types'
import { getContentfulClient } from './getContentfulClient'
import { PostSkeleton } from './types/postSkeleton'
import { formatPosts } from './utils'

export const getPostsByCategory = async (category: string): Promise<Post[]> => {
  const client = getContentfulClient()
  const { items } = await client.withoutUnresolvableLinks.getEntries<PostSkeleton>({
    content_type: 'post',
    'fields.category': category,
  })
  return formatPosts(items)
}
