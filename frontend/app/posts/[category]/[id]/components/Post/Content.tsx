import clsx from 'clsx'

type Props = {
  reactNode: React.ReactNode
}

export function Content({ reactNode }: Props) {
  return <article className={clsx('box-white md-content')}>{reactNode}</article>
}
