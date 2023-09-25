import { create } from 'zustand'

export interface DarkMode {
  isDark: boolean
  setDarK: (_isDark: boolean) => void
}

export const INIT_THEME_STORE: DarkMode = {
  isDark: false,
  setDarK: (_isDark: boolean) => ({}),
}

export const useDarkStore = create<DarkMode>((set) => ({
  ...INIT_THEME_STORE,
  isDark: false,
  setDark: (isDark: boolean) => set(() => ({ isDark })),
}))
