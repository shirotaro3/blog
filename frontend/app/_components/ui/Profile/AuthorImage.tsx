// import { Image } from '@/components/ui/Image'
import Image from 'next/image'
import clsx from 'clsx'

export function AuthorImage() {
  return (
    <div className={clsx('text-sm bg-brightness-80 px-4 pt-4 lg:p-0')}>
      <div className={clsx('bg-profile')}>
        <Image
          src="/img/kawauso.webp"
          className={clsx('block m-auto w-[200px] lg:w-full')}
          alt="profile image"
          priority={true}
          width={400}
          height={363}
        />
      </div>
    </div>
  )
}
