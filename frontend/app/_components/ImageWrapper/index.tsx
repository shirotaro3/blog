import NextImage from 'next/image'

type Props = {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export function Image(props: Props) {
  return <NextImage {...props} src={`${process.env.NEXT_PUBLIC_BASE_PATH}${props.src}`} />
}
