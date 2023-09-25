import { create } from 'zustand'
import { useDarkmode } from '@/hooks/useDarkmode'

interface DarkMode {
  isDark: boolean
  toggleState: () => void
}

const useDarkStore = create<DarkMode>((set) => ({
  isDark: useDarkmode().darkMode,
  toggleState: () =>
    set((prev) => ({
      isDark: !prev.isDark,
    })),
}))

export default useDarkStore
