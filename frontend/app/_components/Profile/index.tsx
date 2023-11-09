'use client'

import { FadeInBox } from '../FadeInBox'
import { Heading } from '../Heading'
import { LinkButton } from '../LinkButton'
import { Image } from '../../_components/ImageWrapper'

export function Profile() {
  return (
    <>
      <FadeInBox className="box w-full">
        <Heading level={3}>著者について</Heading>
      </FadeInBox>
      <FadeInBox className="w-1col-md text-sm  border-x border-t lg:border-0 border-gray-400 px-4 pt-4 lg:p-0">
        <div className="bg-[#94e4fc]">
          <Image
            src="/img/kawauso.webp"
            className="w-[200px] lg:w-full block m-auto"
            alt="profile image"
            width={100}
            height={100}
          />
        </div>
      </FadeInBox>
      <FadeInBox className="box-outline-joint text-sm w-2col-md">
        <div className="flex flex-col h-full">
          <div className="font-bold text-lg box-sub">YSK</div>
          <ul className="list-disc list-inside py-5 px-2">
            <li>1992年生まれ</li>
            <li>首都圏在住</li>
            <li>Webエンジニア</li>
            <li>趣味：旅行</li>
          </ul>
          <div className="w-[230px] flex-grow mx-auto flex items-center justify-center">
            <LinkButton href="/profile" size="sm" variant="secondary">
              詳しくはこちら
            </LinkButton>
          </div>
        </div>
      </FadeInBox>
    </>
  )
}
