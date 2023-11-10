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
    <div className="bg-brightness-80 p-4 lg:h-full">
      <h3 className="font-bold text-lg p-2 border-b border-grayscale-400">目次</h3>
      <ol className="px-2">
        {headings.map((heading, i) => (
          <li
            key={i}
            data-depth={heading.depth}
            className={clsx(
              'pt-1 md:pt-2',
              'data-[depth="3"]:ml-3 data-[depth="3"]:text-sm',
              'data-[depth="4"]:ml-6 data-[depth="4"]:text-sm',
            )}
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
  )
}
