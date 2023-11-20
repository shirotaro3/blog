'use client'

import { useState, useEffect } from 'react'
import { useMediaQuery as useMediaQueryOrigin } from 'react-responsive'

type Props = {
  query: string
}

export const useMediaQuery = (props: Props) => {
  const [isClient, setIsClient] = useState(false)
  const match = useMediaQueryOrigin(props)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true)
    }
  }, [])

  return isClient ? match : false
}
