import clsx from 'clsx'
import { FadeInBox } from '@/components/FadeInBox'
import { Heading } from '@/components/Heading'
import { Image } from '@/components/Image'
import { AuthorImage } from './AuthorImage'
import { Introduction } from './Introduction'

export function ProfileSP() {
  return (
    <>
      <FadeInBox className={clsx('w-full')}>
        <Heading level={3}>著者について</Heading>
      </FadeInBox>
      <FadeInBox className={clsx('w-1col-md')}>
        <AuthorImage />
        <Introduction />
      </FadeInBox>
    </>
  )
}
