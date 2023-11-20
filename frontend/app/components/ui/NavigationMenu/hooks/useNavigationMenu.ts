'use client'

import { atom, useAtom } from 'jotai'

const navigationMenuAtom = atom(false)

export function useHamburgerMenu() {
  return useAtom(navigationMenuAtom)
}
