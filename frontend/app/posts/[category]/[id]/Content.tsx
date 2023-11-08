import { FadeInBox } from '../../../_components/FadeInBox'

type Props = {
  html: string
}

export function Content({ html }: Props) {
  return (
    <FadeInBox className="box w-full md-content">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </FadeInBox>
  )
}
