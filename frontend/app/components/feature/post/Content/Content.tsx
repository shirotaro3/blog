import { ReactNode } from 'react'
import clsx from 'clsx'

type Props = {
  reactNode: ReactNode
}

export function Content({ reactNode }: Props) {
  return (
    <div className={clsx('bg-brightness-80 p-3', 'lg:py-10 lg:px-4')}>
      <article
        className={clsx('md-content mx-auto', 'lg:max-w-[800px]', '[&>*:first-child]:!mt-0')}
      >
        {reactNode}
      </article>
    </div>
  )
}
