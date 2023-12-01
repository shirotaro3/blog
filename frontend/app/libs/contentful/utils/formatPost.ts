import { Post } from 'types'
import { PostSkeletonEntry } from '../types/postSkeleton'
import { documentToContent } from './documentToContent'
import { documentToTableOfContent } from './documentToTableOfContent'

export function formatPost(post: PostSkeletonEntry): Post {
  return {
    id: post.sys.id,
    title: post.fields.title,
    category: post.fields.category,
    description: post.fields.description,
    content: documentToContent(post.fields.content),
    toc: documentToTableOfContent(post.fields.content),
    cover: {
      url: post.fields.cover?.fields.file?.url || '',
      width: post.fields.cover?.fields.file?.details.image?.width || 0,
      height: post.fields.cover?.fields.file?.details.image?.height || 0,
    },
    date: post.fields.date,
    lastUpdated: post.fields.lastUpdated,
    useToc: post.fields.useToc,
  }
}

export const formatPosts = (posts: PostSkeletonEntry[]): Post[] => {
  return posts.map((post) => formatPost(post))
}
