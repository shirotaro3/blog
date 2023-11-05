'use client'

import { useEffect, useState } from 'react'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import { Button } from '../../_components/Button'
import { FadeInBox } from '../../_components/FadeInBox'
import { Heading } from '../../_components/Heading'
import { Post } from '../../_data/posts/types'
import { Card } from './Card'

type Props = {
  headingText: string
  perPage?: number
  posts: Required<Post>[]
}

const PER_PAGE = 12

export function PostList({ headingText, posts, perPage = PER_PAGE }: Props) {
  const { replace } = useRouter()
  const pathname = usePathname()
  const search = useSearchParams()
  const currentPage = search.get('page') ? Number(search.get('page')) : 1
  const [page, setPage] = useState(currentPage)
  const sliced = posts.slice(0, perPage * page)
  const showButton = posts.length > perPage * page

  const handleClick = () => {
    replace(`${pathname}/?page=${page + 1}`)
  }

  useEffect(() => {
    setPage((prev) => {
      if (currentPage !== prev) return currentPage
      return prev
    })
  }, [currentPage])

  return (
    <>
      <FadeInBox className="box w-full">
        <Heading level={2}>{headingText}</Heading>
      </FadeInBox>
      <ul className="w-full flex flex-wrap base-gap">
        {sliced.length > 0 ? (
          sliced.map((post) => <Card key={post.path} post={post} />)
        ) : (
          <li>
            <p>記事がありません</p>
          </li>
        )}
      </ul>
      {showButton && (
        <div className="w-full">
          <div className="w-1col m-auto">
            <Button onClick={handleClick}>More...</Button>
          </div>
        </div>
      )}
    </>
  )
}
