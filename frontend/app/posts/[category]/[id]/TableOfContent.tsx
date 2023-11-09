'use client'

import clsx from 'clsx'
import { FadeInBox } from '@/components/FadeInBox'

type Props = {
  headings: {
    depth: number
    text: string
  }[]
}

export function TableOfContent({ headings }: Props) {
  //TODO
  return (
    <FadeInBox className="w-1col-md">
      <div className="box-outline h-full">
        <h3 className="font-bold text-lg box-sub">目次</h3>
        <ol className="list-disc pl-5">
          {headings.map((heading, i) => (
            <li
              key={i}
              data-depth={heading.depth}
              className={clsx('pt-2', 'data-[depth="3"]:ml-5 data-[depth="4"]:ml-10')}
            >
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
      </div>
    </FadeInBox>
  )
}
