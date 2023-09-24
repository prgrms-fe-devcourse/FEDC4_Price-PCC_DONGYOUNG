'use client'

import { useState } from 'react'
import Cookies from 'js-cookie'
import Assets from '@/config/assets'

import useStorage from '@/hooks/useStorage'
import useDarkStore from '@/stores/darkMode'
import ImageButton from '../ImageButton'

type PropsType = {
  darkMode: boolean
}


export default function DarkModeButton({ changeDarkMode }: PropsType) {
  const [darkMode, setDarkMode] = useStorage<boolean>({
    storageType: 'local',
    key: 'pcc-darkmode',
    initialValue: window.matchMedia('(prefers-color-scheme: dark)').matches,
  })

  const { toggleState } = useDarkStore()

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
    toggleState()

export default function DarkModeButton({ darkMode }: PropsType) {
  const [isDark, setIsDark] = useState(darkMode)
  const handleDarkmodeClick = () => {
    document.body.classList.toggle('pcc-theme--light')
    document.body.classList.toggle('pcc-theme--dark')
    Cookies.set('pcc-darkmode', JSON.stringify(!isDark))
    setIsDark(!isDark)

  }
  return (
    <ImageButton
      size={3}
      src={isDark ? Assets.LIGHTMODE_SVG_PATH : Assets.DARKMODE_SVG_PATH}
      alt={`${isDark ? 'dark' : 'light'} mode button`}
      onClick={handleDarkmodeClick}
    />
  )
}
