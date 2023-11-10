import clsx from 'clsx'
import { FadeInBox } from '@/components/FadeInBox'
import { Heading } from '@/components/Heading'
import { Image } from '@/components/ImageWrapper'

export function Profile() {
  return (
    <>
      <FadeInBox className={clsx('w-full')}>
        <Heading level={3}>著者について</Heading>
      </FadeInBox>
      <FadeInBox className={clsx('w-1col-md', 'after:lg-only-border-b')}>
        <div className={clsx('text-sm px-4 pt-4 bg-white', 'lg:p-0')}>
          <div className={clsx('bg-profile')}>
            <Image
              src="/img/kawauso.webp"
              className={clsx('w-[200px] block m-auto', 'lg:w-full')}
              alt="profile image"
              width={100}
              height={100}
            />
          </div>
        </div>
      </FadeInBox>
      <FadeInBox className={clsx('w-2col-md -mt-5', 'after:lg-only-border-t', 'lg:mt-0')}>
        <div className={clsx('flex flex-col h-full bg-brightness-80 p-4 text-sm')}>
          <div className={clsx('font-bold text-lg p-2 border-b border-grayscale-400')}>YSK</div>
          <ul className={clsx('list-disc list-inside py-5 px-2')}>
            <li>1992年生まれ</li>
            <li>首都圏在住</li>
            <li>Webエンジニア</li>
            <li>趣味：旅行</li>
          </ul>
        </div>
      </FadeInBox>
    </>
  )
}
