'use client'

import { usePathname } from 'next/navigation'
import { sitemap } from '../data/sitemap'

function getPaths(pathname: string) {
  const hierarchies = pathname
    .split('/')
    .filter((path) => path !== '')
    .slice(0, -1)
  if (hierarchies.length === 0) return []

  const paths = ['/']
  hierarchies.reduce((acc, cur) => {
    const path = `${acc}/${cur}`
    paths.push(path)
    return path
  }, '')
  return paths
}

export function useBreadCrumbs() {
  const pathname = usePathname()
  const breadCrumbs = getPaths(pathname).flatMap((path) => {
    const text = sitemap[path]
    if (!text) return []
    return { path, text }
  })
  return breadCrumbs
}
