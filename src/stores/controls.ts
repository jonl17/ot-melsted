import { create } from 'zustand'

type State = 'logo' | 'dots' | 'text'

type ControlsStore = {
  title?: string
  state: State
  updateControls: (state: State, text?: string) => void
}

export const useControlsStore = create<ControlsStore>((set) => ({
  title: 'OT.Melsted',
  state: 'dots',
  updateControls: (state, text) => {
    if (text) {
      set({ state: 'text', title: text })
    } else {
      set({ state, title: undefined })
    }
  },
}))
