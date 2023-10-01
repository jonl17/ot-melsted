import { create } from 'zustand'

type ProjectPaginationStore = {
  uids: string[]
  setUids: (uids: string[]) => void
}

export const useProjectPagination = create<ProjectPaginationStore>((set) => ({
  uids: [],
  setUids: (uids) => set({ uids }),
}))
