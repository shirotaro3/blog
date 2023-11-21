import '@contentful/rich-text-types'
import { Post } from 'types'
import { getContentfulClient } from '../getContentfulClient'
import { PostSkeleton } from '../types/postSkeleton'
import { formatPosts } from './formatPost'

export const getAllPosts = async (): Promise<Post[]> => {
  const client = getContentfulClient()
  const { items } = await client.withoutUnresolvableLinks.getEntries<PostSkeleton>({
    content_type: 'post',
  })
  return formatPosts(items)
}
