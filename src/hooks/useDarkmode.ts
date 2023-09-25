'use client'

import { useState } from 'react'
import Cookies from 'js-cookie'
import { constants } from '@/config/constants'

export const useDarkmode = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      let initialDarkmode = false
      const cookieVal = Cookies.get(constants.DARKMODE_KEY)
      return cookieVal ? JSON.parse(cookieVal) : initialDarkmode
    } catch (e) {
      console.error(e)
    }
  })

  const toggleDarkMode = () => {
    document.body.classList.toggle('pcc-theme--light')
    document.body.classList.toggle('pcc-theme--dark')
    Cookies.set(constants.DARKMODE_KEY, JSON.stringify(!darkMode))
    setDarkMode(!darkMode)
  }

  return { darkMode, toggleDarkMode }
}
