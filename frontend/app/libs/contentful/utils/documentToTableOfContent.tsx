import { ReactNode } from 'react'
import Link from 'next/link'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Document, BLOCKS, TopLevelBlock, NodeData } from '@contentful/rich-text-types'
import clsx from 'clsx'

const crypto = require('crypto')

const headingTypes = [BLOCKS.HEADING_2, BLOCKS.HEADING_3]

// 目次の作成
const options = {
  renderNode: {
    [BLOCKS.HEADING_2]: (node: NodeData, children: ReactNode) => {
      const anchor = crypto.createHash('md5').update(node.content[0].value).digest('hex')
      return (
        <li
          className={clsx(
            'py-1 pl-10 relative flex items-center',
            'lg:pl-6',
            'before:absolute before:h-4 before:w-4 before:-left-1.5 before:bg-primary-main before:rounded-full',
          )}
        >
          <Link href={`#${anchor}`}>{children}</Link>
        </li>
      )
    },
    [BLOCKS.HEADING_3]: (node: NodeData, children: ReactNode) => {
      const anchor = crypto.createHash('md5').update(node.content[0].value).digest('hex')
      return (
        <li className={clsx('py-1 pl-14 border-l-4 border-primary-main', 'lg:text-sm lg:pl-10')}>
          <Link href={`#${anchor}`}>{children}</Link>
        </li>
      )
    },
  },
}

export function documentToTableOfContent(document: Document) {
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
