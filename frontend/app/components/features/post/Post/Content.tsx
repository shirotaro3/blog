import clsx from 'clsx'

type Props = {
  reactNode: React.ReactNode
}

export function Content({ reactNode }: Props) {
  return (
    <div className="bg-brightness-80 p-4 lg:py-10">
      <article
        className={clsx('md-content mx-auto', 'lg:max-w-[800px]', '[&>*:first-child]:!mt-0')}
      >
        {reactNode}
      </article>
    </div>
  )
}
