import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Document, BLOCKS } from '@contentful/rich-text-types'
import clsx from 'clsx'

const crypto = require('crypto')

type Props = {
  document: Document
}
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

export function Content({ document }: Props) {
  return (
    <article className={clsx('box-white md-content')}>
      {documentToReactComponents(document, options)}
    </article>
  )
}
