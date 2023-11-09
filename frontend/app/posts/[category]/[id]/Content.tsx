import { FadeInBox } from '@/components/FadeInBox'

type Props = {
  html: string
}

export function Content({ html }: Props) {
  return (
    <FadeInBox className="w-full">
      <div className="box md-content" dangerouslySetInnerHTML={{ __html: html }} />
    </FadeInBox>
  )
}
