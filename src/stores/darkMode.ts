import Cookies from 'js-cookie'
import { create } from 'zustand'
import { constants } from '@/config/constants'

interface DarkMode {
  isDark: boolean
  toggleState: () => void
}

const useDarkStore = create<DarkMode>((set) => ({
  isDark: Cookies.get(constants.DARKMODE_KEY)
    ? JSON.parse(Cookies.get(constants.DARKMODE_KEY)!)
    : false,
  toggleState: () =>
    set((prev) => ({
      isDark: !prev.isDark,
    })),
}))

export default useDarkStore
