'use client'

import DarkModeButton from '@/components/atoms/DarkModeButton'
import NotificationButton from '@/components/atoms/NotificationButton'
import SearchBar from '@/components/atoms/SearchBar'
import './index.scss'

export default function Header() {
  return (
    <div className="header-container color-bg--bg-1">
      <SearchBar />
      <div className="button-container">
        <NotificationButton />
        <DarkModeButton />
      </div>
    </div>
  )
}
