import { ReactNode } from 'react'
import clsx from 'clsx'

type Props = {
  reactNode: ReactNode
}

export function TableOfContent({ reactNode }: Props) {
  return (
    <div className={clsx('box-white', 'lg:h-full')}>
      <div className={clsx('pb-4 px-2', 'lg:p-4')}>
        <div
          className={clsx(
            'font-bold text-base mb-2 border-primary-main',
            'lg:border-b lg:pb-2 lg:text-lg',
          )}
        >
          目次
        </div>
        <ol className="px-2">{reactNode}</ol>
      </div>
    </div>
  )
}
