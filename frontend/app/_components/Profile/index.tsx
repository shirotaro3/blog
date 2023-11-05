'use client'

import { FadeInBox } from '../FadeInBox'
import { Heading } from '../Heading'
import { LinkButton } from '../LinkButton'

export function Profile() {
  return (
    <>
      <FadeInBox className="box w-full">
        <Heading level={3}>著者のプロフィール</Heading>
      </FadeInBox>
      <FadeInBox className="w-1col-md text-sm  border-x border-t lg:border-0 border-gray-400 px-4 pt-4 lg:p-0">
        <div className="bg-[#94e4fc]">
          <img src="/img/kawauso.webp" className="w-[200px] lg:w-full block m-auto" />
        </div>
      </FadeInBox>
      <FadeInBox className="box-outline-joint text-sm w-2col-md">
        <div className="flex flex-col h-full">
          <div className="font-bold text-lg box-sub">YSK</div>
          <h4 className="font-bold text-base py-2">来歴</h4>
          <p>hoge</p>
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
