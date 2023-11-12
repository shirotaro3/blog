import Link from 'next/link'
import clsx from 'clsx'

type Props = {
  headings: {
    depth: number
    text: string
  }[]
  toc: boolean
}

export function TableOfContent({ headings, toc }: Props) {
  return (
    <div className="box-white lg:h-full">
      <div className="border p-4 lg:border-0 lg:p-0">
        <h3 className="font-bold text-lg p-2 mb-2 border-b border-grayscale-400">目次</h3>
        <ol className="px-2">
          {headings.map((heading, i) => (
            <li
              key={i}
              data-depth={heading.depth}
              className={clsx(
                'pt-1 md:pt-2',
                'data-[depth="3"]:ml-4 data-[depth="3"]:text-sm',
                'data-[depth="4"]:ml-8 data-[depth="4"]:text-sm',
              )}
            >
              <Link
                href={`#${heading.text
                  .replace(/ /g, '-')
                  .replace(/[\/\\^$*+?.()|\[\]{}<>:;"'~,=@`#!%&]/g, '')
                  .toLowerCase()}`}
                className={clsx('link')}
              >
                {heading.text}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
