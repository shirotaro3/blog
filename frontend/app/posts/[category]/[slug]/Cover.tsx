import { FadeInBox } from '../../../_components/FadeInBox'
import { Post } from '../../../_data/posts/types'

type Props = Omit<Post, 'content' | 'path'>

export function Cover({ data }: Props) {
  return (
    <FadeInBox className="w-2col-md relative">
      <div className="absolute flex justify-center items-center w-full h-full">
        <div className="flex justify-center items-center text-center p-3 bg-black bg-opacity-20 text-white font-bold text-2xl md:text-3xl w-full">
          <div className="mx-5">{data.title}</div>
        </div>
      </div>
      <img src={data.cover} className="w-full h-[250px] md:h-[300px] lg:h-[400px]" />
    </FadeInBox>
  )
}
