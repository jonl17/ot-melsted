import { create } from 'zustand'

type State = 'logo' | 'dots' | 'text' | 'wip'

type ControlsStore = {
  state: State
  updateControls: (state: State, text?: string, closeIcon?: boolean) => void
  title?: string
  closeIcon?: boolean
}

export const useControlsStore = create<ControlsStore>((set) => ({
  state: 'wip',
  updateControls: (state, text, closeIcon) => {
    if (text) {
      set({ state: 'text', title: text, closeIcon: closeIcon ?? false })
    } else {
      set({ state, title: undefined, closeIcon: false })
    }
  },
  title: 'New website opening 2024',
  closeIcon: false,
}))
