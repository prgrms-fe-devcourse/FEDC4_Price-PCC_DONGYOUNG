'use client'

import React, { useEffect } from 'react'
import Assets from '@/config/assets'
import useStorage from '@/hooks/useStorage'
import ImageButton from '../ImageButton'

type PropsType = {
  changeDarkMode: (_value: boolean) => void
}

export default function DarkModeButton({ changeDarkMode }: PropsType) {
  let isSystemDark = false
  if (typeof window !== 'undefined') {
    isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  
export default function DarkModeButton() {
  const [darkMode, setDarkMode] = useStorage<boolean>({
    storageType: 'local',
    key: 'pcc-darkmode',
    initialValue: window.matchMedia('(prefers-color-scheme: dark)').matches,
  })

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('pcc-theme--dark')
      document.body.classList.remove('pcc-theme--light')
    }
  }, [darkMode])

  const handleDarkmodeClick = () => {
    document.body.classList.toggle('pcc-theme--light')
    document.body.classList.toggle('pcc-theme--dark')
    setDarkMode(!darkMode)
    changeDarkMode(!darkMode)
  }

  return (
    <ImageButton
      size={3}
      src={darkMode ? Assets.LIGHTMODE_SVG_PATH : Assets.DARKMODE_SVG_PATH}
      alt={`${darkMode ? 'dark' : 'light'} mode button`}
      onClick={handleDarkmodeClick}
    />
  )
}
