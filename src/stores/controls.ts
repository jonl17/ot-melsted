import { create } from 'zustand'

type ControlsStore = {
  title?: string
  setTitle: (title?: string) => void
}

export const useControlsStore = create<ControlsStore>((set) => ({
  title: 'OT.Melsted',
  setTitle: (title) => set({ title }),
}))
