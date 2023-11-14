import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Document, BLOCKS } from '@contentful/rich-text-types'

const crypto = require('crypto')

// TODO: 型定義を調べる
const options = {
  renderNode: {
    [BLOCKS.HEADING_2]: (node: any, children: any) => {
      const anchor = crypto.createHash('md5').update(node.content[0].value).digest('hex')
      return <h2 id={anchor}>{children}</h2>
    },
    [BLOCKS.HEADING_3]: (node: any, children: any) => {
      const anchor = crypto.createHash('md5').update(node.content[0].value).digest('hex')
      return <h3 id={anchor}>{children}</h3>
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

export function documentToContent(document: Document) {
  return documentToReactComponents(document, options)
}
