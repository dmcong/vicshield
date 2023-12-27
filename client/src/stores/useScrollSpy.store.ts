import { create } from 'zustand'

interface IScrollSpyStore {
  activeSection: string
  setActiveSection: (activeSection: string) => void
}

export const useScrollSpyStore = create<IScrollSpyStore>((set) => ({
  activeSection: '',
  setActiveSection: (activeSection) => set({ activeSection }),
}))
