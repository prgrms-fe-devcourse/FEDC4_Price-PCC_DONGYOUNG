import { useState } from 'react'

export const useDarkMode = () => {
  const [mode, setMode] = useState({
    dark: window.matchMedia('(prefers-color-scheme: dark)').matches,
  })

  return {
    mode,
    setMode,
  }
}
