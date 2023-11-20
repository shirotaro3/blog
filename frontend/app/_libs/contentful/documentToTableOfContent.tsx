import Link from 'next/link'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Document, BLOCKS, TopLevelBlock } from '@contentful/rich-text-types'
import clsx from 'clsx'

const crypto = require('crypto')

const headingTypes = [BLOCKS.HEADING_2, BLOCKS.HEADING_3]

// TODO: 型定義を調べる
// 目次の作成
const options = {
  renderNode: {
    [BLOCKS.HEADING_2]: (node: any, children: any) => {
      const anchor = crypto.createHash('md5').update(node.content[0].value).digest('hex')
      return (
        <li className={clsx('pt-2')}>
          <Link href={`#${anchor}`} className={clsx('link')}>
            {children}
          </Link>
        </li>
      )
    },
    [BLOCKS.HEADING_3]: (node: any, children: any) => {
      const anchor = crypto.createHash('md5').update(node.content[0].value).digest('hex')
      return (
        <li className={clsx('pt-2 ml-6 lg:text-sm')}>
          <Link href={`#${anchor}`} className={clsx('link')}>
            {children}
          </Link>
        </li>
      )
    },
  },
}

export function DocumentToTableOfContent(document: Document) {
  const headings: TopLevelBlock[] = document.content.filter((node) =>
    headingTypes.includes(node.nodeType),
  )
  const toc: Document = {
    nodeType: BLOCKS.DOCUMENT,
    content: headings,
    data: {},
  }
  return documentToReactComponents(toc, options)
}
