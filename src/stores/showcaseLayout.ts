import { ShowcaseLayoutType } from '@/types'
import { create } from 'zustand'

type ShowcaseLayoutStore = {
  layout: ShowcaseLayoutType
  setLayout: (layout: ShowcaseLayoutType) => void
}

export const useShowcaseLayoutStore = create<ShowcaseLayoutStore>((set) => ({
  layout: 'abstract-column',
  setLayout: (layout) => set({ layout }),
}))
