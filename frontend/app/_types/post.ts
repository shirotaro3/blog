import { Document } from '@contentful/rich-text-types'

export type Post = {
  id: string
  title: string
  description: string
  category: string
  cover: string
  date: string
  lastUpdated: string
  toc: boolean
  document: Document
}
