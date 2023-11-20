import Image from 'next/image'
import Link from 'next/link'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Document, BLOCKS, INLINES } from '@contentful/rich-text-types'
import clsx from 'clsx'

const crypto = require('crypto')

const MAX_IMAGE_WIDTH = 600

// TODO: 型定義を調べる
const options = {
  renderNode: {
    // 見出しの表示 idを付与する
    [BLOCKS.HEADING_2]: (node: any, children: React.ReactNode) => {
      const anchor = crypto.createHash('md5').update(node.content[0].value).digest('hex')
      return <h2 id={anchor}>{children}</h2>
    },
    [BLOCKS.HEADING_3]: (node: any, children: React.ReactNode) => {
      const anchor = crypto.createHash('md5').update(node.content[0].value).digest('hex')
      return <h3 id={anchor}>{children}</h3>
    },
    // 画像の表示 最大幅を超える場合は縮小する
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const originalWidth = node.data.target.fields.file.details.image.width
      const width = originalWidth > MAX_IMAGE_WIDTH ? MAX_IMAGE_WIDTH : originalWidth
      const height = node.data.target.fields.file.details.image.width
      return (
        <div className="mt-6">
          <figure
            className={clsx(
              'border px-2 pt-2 inline-block border-grayscale-400 max-w-[calc(600px+1rem)]',
            )}
          >
            <Image
              src={node.data.target.fields.file.url + `?q=70&w=${width}&h=${height}&fm=webp`}
              alt={node.data.target.fields.title}
              width={width}
              height={node.data.target.fields.file.details.image.height * (width / height)}
            />
            <figcaption className={clsx('p-2')}>{node.data.target.fields.title}</figcaption>
          </figure>
        </div>
      )
    },
    // リンクの表示 外部リンクの場合は別タブで開く
    [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => {
      if (node.data.uri.startsWith('/')) {
        return <Link href={node.data.uri}>{children}</Link>
      }
      return (
        <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      )
    },
  },
  renderText: (text: string) => {
    return text
      .split('\n')
      .reduce((children: React.ReactNode[], textSegment: string, index: number) => {
        return [...children, index > 0 && <br key={index} />, textSegment]
      }, [])
  },
}

export function DocumentToContent(document: Document) {
  return documentToReactComponents(document, options)
}
