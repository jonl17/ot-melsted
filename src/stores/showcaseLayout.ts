import { ShowcaseLayoutType } from '@/types'
import { create } from 'zustand'

type ShowcaseLayoutStore = {
  layout: ShowcaseLayoutType
  setLayout: (layout: ShowcaseLayoutType, callback?: () => void) => void
}

export const useShowcaseLayoutStore = create<ShowcaseLayoutStore>((set) => ({
  layout: 'single-column',
  setLayout: (layout, callback) => {
    if (callback) {
      callback()
    }
    return set({ layout })
  },
}))
