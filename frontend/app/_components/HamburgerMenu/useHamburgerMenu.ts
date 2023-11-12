'use client'

import { atom, useAtom } from 'jotai'

const hamburgerMenuAtom = atom(false)

export function useHamburgerMenu() {
  return useAtom(hamburgerMenuAtom)
}
