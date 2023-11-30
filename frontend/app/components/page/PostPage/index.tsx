'use client'

import type { Post } from 'types'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { PostPC } from './PC'
import { PostSP } from './SP'

type Props = {
  post: Post
}

export function PostPage({ post }: Props) {
  const isMobile = useMediaQuery({ query: '(max-width: 1023px)' })
  return isMobile ? <PostSP post={post} /> : <PostPC post={post} />
}
