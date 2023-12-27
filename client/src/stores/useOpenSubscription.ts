import { create } from 'zustand'

interface IOpenSubscriptionStore {
  open: boolean
  setOpen: (open: boolean) => void
}

export const useOpenSubscription = create<IOpenSubscriptionStore>((set) => ({
  open: false,
  setOpen: (open) => set({ open }),
}))
