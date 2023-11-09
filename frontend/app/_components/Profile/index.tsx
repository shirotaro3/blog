'use client'

import clsx from 'clsx'
import { FadeInBox } from '@/components/FadeInBox'
import { Heading } from '@/components/Heading'
import { LinkButton } from '@/components/LinkButton'
import { Image } from '@/components/ImageWrapper'

export function Profile() {
  return (
    <>
      <FadeInBox className={clsx('w-full')}>
        <Heading level={3}>著者について</Heading>
      </FadeInBox>
      <FadeInBox
        className={clsx(
          'w-1col-md text-sm border-x border-t border-gray-400 px-4 pt-4',
          'lg:border-0 lg:p-0',
        )}
      >
        <div className={clsx('bg-[#94e4fc]')}>
          <Image
            src="/img/kawauso.webp"
            className={clsx('w-[200px] block m-auto', 'lg:w-full')}
            alt="profile image"
            width={100}
            height={100}
          />
        </div>
      </FadeInBox>
      <FadeInBox className={clsx('w-2col-md')}>
        <div className={clsx('flex flex-col h-full box-outline-joint text-sm')}>
          <div className={clsx('font-bold text-lg box-sub')}>YSK</div>
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
