'use client'

import { useMediaQuery } from '@/hooks/useMediaQuery'
import { ProfilePC } from './PC'
import { ProfileSP } from './SP'

export function Profile() {
  const isMobile = useMediaQuery({ query: '(max-width: 1023px)' })
  return isMobile ? <ProfileSP /> : <ProfilePC />
}
