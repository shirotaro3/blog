import { ReactNode } from 'react'

type Props = {
  reactNode: ReactNode
}

export function TableOfContent({ reactNode }: Props) {
  return (
    <div className="box-white lg:h-full">
      <div className="border p-4 lg:border-0 border-grayscale-400 lg:p-0">
        <div className="font-bold text-lg p-2 mb-2 border-b border-grayscale-400">目次</div>
        <ol className="px-2">{reactNode}</ol>
      </div>
    </div>
  )
}
