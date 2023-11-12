import { JSX } from 'react'
import clsx from 'clsx'

type Props = {
  children?: JSX.Element | JSX.Element[]
  groupName: string
}

export function MenuLinkGroup({ children, groupName }: Props) {
  return (
    <div className={clsx('w-1col')}>
      <div className={clsx('font-bold p-4')}>{groupName}</div>
      <ul>{children}</ul>
    </div>
  )
}
