import { create, StateCreator } from 'zustand'
import { PersistOptions, persist } from 'zustand/middleware'

export type Persist<T> = (
  _config: StateCreator<T>,
  _options: PersistOptions<T>,
) => StateCreator<T>

export interface DarkMode {
  isDark: boolean
  setDark: (_isDark: boolean) => void
}

export const INIT_THEME_STORE: DarkMode = {
  isDark: false,
  setDark: (_isDark: boolean) => {},
}

export const useDarkStore = create<DarkMode>(
  (persist as Persist<DarkMode>)(
    (set) => ({
      ...INIT_THEME_STORE,
      isDark: false,
      setDark: (isDark: boolean) => set(() => ({ isDark })),
    }),
    { name: 'pcc-darkmode' },
  ),
)

