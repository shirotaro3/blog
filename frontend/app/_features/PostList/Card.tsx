'use client'

import Link from 'next/link'
import { useInView } from 'react-intersection-observer'
import { Post } from '../../_data/posts/types'

type Props = {
  post: Required<Post>
}

const DEFAULT_COVER_PATH = '/cover/sea.webp'

export function Card({ post }: Props) {
  const { ref, inView } = useInView({ triggerOnce: true, delay: 100 })
  const inViewClass = inView ? 'animate-fadeIn' : 'opacity-0'
  return (
    <li className={`w-1col ${inViewClass}`}>
      <Link
        href={post.path}
        ref={ref}
        className="block transition lg:opacity-70 border lg:hover:border-gray-400 lg:hover:opacity-100 overflow-hidden lg:[&:hover_.card-cover]:scale-110 duration-300 bg-white"
      >
        <div className="h-[200px] overflow-hidden">
          <div className="card-cover duration-300 relative">
            <div className="absolute flex justify-center items-center w-full h-full">
              <div className="flex justify-center items-center text-center p-3 bg-black bg-opacity-20 text-white font-bold text-xl w-full">
                <div className="mx-5">{post.data.title}</div>
              </div>
            </div>
            <img src={post.data.cover || DEFAULT_COVER_PATH} className="w-full h-[200px]" />
          </div>
        </div>
        <div className="p-4">
          <h3 className="hidden md:block">{post.data.title}</h3>
          <span className="text-sm text-gray-500">{post.data.date}</span>
        </div>
      </Link>
    </li>
  )
}
