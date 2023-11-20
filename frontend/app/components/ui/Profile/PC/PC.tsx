import clsx from 'clsx'
import { FadeInObserver } from '@/components/ui/FadeInObserver'
import { Heading } from '@/components/ui/Heading'
import { AuthorImage } from '../AuthorImage'
import { Introduction } from '../Introduction'

export function ProfilePC() {
  return (
    <>
      <FadeInObserver className={clsx('w-full')}>
        <Heading level={3}>著者について</Heading>
      </FadeInObserver>
      <FadeInObserver className={clsx('w-1col-md')}>
        <AuthorImage />
      </FadeInObserver>
      <FadeInObserver className={clsx('w-2col-md')}>
        <Introduction />
      </FadeInObserver>
    </>
  )
}
