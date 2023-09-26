import { useCallback, useEffect } from 'react'
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
    document.body.classList.toggle('pcc-theme--light')
    document.body.classList.toggle('pcc-theme--dark')
  }, [isDark, setDark])

  useEffect(() => {
    document.body.classList.toggle('pcc-theme--dark')
    document.body.classList.toggle('pcc-theme--light')

    toggleDark()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { isDark, setDark, toggleDark }
}
