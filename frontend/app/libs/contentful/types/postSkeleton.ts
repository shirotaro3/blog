import { EntryFieldTypes, Entry } from 'contentful'

export type PostSkeleton = {
  contentTypeId: 'post'
  fields: {
    title: EntryFieldTypes.Text
    category: EntryFieldTypes.Text
    description: EntryFieldTypes.Text
    cover: EntryFieldTypes.AssetLink
    content: EntryFieldTypes.RichText
    useToc: EntryFieldTypes.Boolean
    date: EntryFieldTypes.Date
    lastUpdated: EntryFieldTypes.Date
  }
}

export type PostSkeletonEntry = Entry<PostSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
