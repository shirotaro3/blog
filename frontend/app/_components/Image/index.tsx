import NextImage from 'next/image'

type Props = {
  src: string
  alt: string
  className?: string
  priority?: boolean
}

// 静的ビルド時には画像最適化が行われないため、width, heightは適当
export function Image(props: Props) {
  return (
    <NextImage
      {...props}
      src={`${process.env.NEXT_PUBLIC_BASE_PATH}${props.src}`}
      width={100}
      height={100}
    />
  )
}
