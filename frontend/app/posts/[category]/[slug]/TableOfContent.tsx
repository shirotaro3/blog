'use client'

import { marked } from 'marked'
import { FadeInBox } from '../../../_components/FadeInBox'

type Props = {
  content: string
}

export function TableOfContent({ content }: Props) {
  const tokens = marked.lexer(content)
  const headings = tokens.filter((token, i) => token.type === 'heading')

  return (
    <FadeInBox className="w-1col-md box-outline">
      <h3 className="font-bold text-lg box-sub">目次</h3>
      <ol className="list-decimal pl-5">
        {headings.map((heading: any, i) => (
          <li key={i} data-depth={heading.depth} className="pt-2">
            <a
              href={`#${heading.text
                .replace(/ /g, '-')
                .replace(/[\/\\^$*+?.()|\[\]{}<>:;"'~,=@`#!%&]/g, '')
                .toLowerCase()}`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ol>
    </FadeInBox>
  )
}
