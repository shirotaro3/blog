'use client'

import { useEffect, useState } from 'react'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import clsx from 'clsx'
import { Post } from '@types'
import { Button } from '@/components/ui/Button'
import { FadeInBox } from '@/components/ui/FadeInBox'
import { Heading } from '@/components/ui/Heading'
import { config } from '@/data/siteConfig'
import { Card } from './Card'

type Props = {
  headingText: string
  perPage?: number
  posts: Post[]
}

export function PostList({ headingText, posts, perPage = config.POST_PER_PAGE }: Props) {
  const { replace } = useRouter()
  const pathname = usePathname()
  const search = useSearchParams()
  const currentPage = search.get('page') ? Number(search.get('page')) : 1
  const [page, setPage] = useState(currentPage)
  const sliced = posts.slice(0, perPage * page)
  const showButton = posts.length > perPage * page

  const handleClick = () => {
    replace(`${pathname}/?page=${page + 1}`, { scroll: false })
  }

  useEffect(() => {
    setPage((prev) => {
      if (currentPage !== prev) return currentPage
      return prev
    })
  }, [currentPage])

  return (
    <>
      <FadeInBox className={clsx('w-full')}>
        <Heading level={2}>{headingText}</Heading>
      </FadeInBox>
      <ul className={clsx('w-full flex flex-wrap gap-base')}>
        {sliced.length > 0 ? (
          sliced.map((post) => <Card key={`${post.category}/${post.id}`} post={post} />)
        ) : (
          <li>
            <p>記事がありません</p>
          </li>
        )}
      </ul>
      {showButton && (
        <div className={clsx('w-full')}>
          <FadeInBox className={clsx('w-1col m-auto')}>
            <Button onClick={handleClick}>More...</Button>
          </FadeInBox>
        </div>
      )}
    </>
  )
}
