import { useEffect, useCallback } from 'react'
import { useDarkStore, INIT_THEME_STORE, DarkMode } from '@/stores/darkMode'
import useZustandStore from './useZustandStore'

export default function useDarkMode() {
  const selector = (store: DarkMode): [boolean, (_arg: boolean) => void] => [
    store.isDark,
    store.setDark,
  ]

  const [isDark, setDark] = useZustandStore(
    useDarkStore,
    INIT_THEME_STORE,
    selector,
  )

  const toggleDark = useCallback(() => {
    setDark(!isDark)
    if (typeof window !== undefined) {
      document.body.classList.toggle('pcc-theme--light')
      document.body.classList.toggle('pcc-theme--dark')
    }
  }, [isDark, setDark])

  useEffect(() => {
    // 다크모드 전역 상태에 따라 <html> 태그에 "dark" class 적용 결정
    if (typeof window !== undefined) {
      document.body.classList.toggle('pcc-theme--light')
      document.body.classList.toggle('pcc-theme--dark')
    }
  }, [isDark, setDark, toggleDark])

  return { isDark, setDark, toggleDark }
}
