import { DocumentToContent } from './DocumentToContent'
import { DocumentToTableOfContent } from './DocumentToTableOfContent'

// あとで型ちゃんと定義する
export function formatPost(post: any) {
  return {
    id: post.sys.id,
    title: post.fields.title,
    category: post.fields.category,
    description: post.fields.description,
    content: DocumentToContent(post.fields.content),
    toc: DocumentToTableOfContent(post.fields.content),
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
