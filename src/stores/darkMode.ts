import { create } from 'zustand'

interface DarkMode {
  isDark: boolean
  toggleState: () => void
}

const useDarkStore = create<DarkMode>((set) => ({
  isDark: false,
  toggleState: () =>
    set((prev) => ({
      isDark: !prev.isDark,
    })),
}))

export default useDarkStore
