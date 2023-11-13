import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Document, BLOCKS } from '@contentful/rich-text-types'

const crypto = require('crypto')

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
}

export function documentToContent(document: Document) {
  return documentToReactComponents(document, options)
}
