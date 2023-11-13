import Link from 'next/link'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, Document, TopLevelBlock } from '@contentful/rich-text-types'
import clsx from 'clsx'

const crypto = require('crypto')

type Props = {
  document: Document
}

const headingTypes = [BLOCKS.HEADING_2, BLOCKS.HEADING_3]

const options = {
  renderNode: {
    [BLOCKS.HEADING_2]: (node: any, children: any) => {
      const anchor = crypto.createHash('md5').update(node.content[0].value).digest('hex')
      return (
        <li className={clsx('pt-2 text-lg lg:text-base')}>
          <Link href={`#${anchor}`} className={clsx('link')}>
            {children}
          </Link>
        </li>
      )
    },
    [BLOCKS.HEADING_3]: (node: any, children: any) => {
      const anchor = crypto.createHash('md5').update(node.content[0].value).digest('hex')
      return (
        <li className={clsx('pt-2 ml-4 lg:text-sm')}>
          <Link href={`#${anchor}`} className={clsx('link')}>
            {children}
          </Link>
        </li>
      )
    },
  },
}

export function TableOfContent({ document }: Props) {
  const headings: TopLevelBlock[] = document.content.filter((node) =>
    headingTypes.includes(node.nodeType),
  )
  const toc: Document = {
    nodeType: BLOCKS.DOCUMENT,
    content: headings,
    data: {},
  }
  return (
    <div className="box-white lg:h-full">
      <div className="border p-4 lg:border-0 border-grayscale-400 lg:p-0">
        <div className="font-bold text-lg p-2 mb-2 border-b border-grayscale-400">目次</div>
        <ol className="px-2">{documentToReactComponents(toc, options)}</ol>
      </div>
    </div>
  )
}
