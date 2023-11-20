import clsx from 'clsx'
import { FadeInObserver } from '@/components/ui/FadeInObserver'
import { Heading } from '@/components/ui/Heading'
import { AuthorImage } from '../AuthorImage'
import { Introduction } from '../Introduction'

export function ProfileSP() {
  return (
    <>
      <FadeInObserver className={clsx('w-full')}>
        <Heading level={2}>著者について</Heading>
      </FadeInObserver>
      <FadeInObserver className={clsx('w-1col-md')}>
        <AuthorImage />
        <Introduction />
      </FadeInObserver>
    </>
  )
}
