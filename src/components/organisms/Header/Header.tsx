'use client'

import SearchBar from '@/components/atoms/SearchBar'
import HeaderButtons from '@/components/molcules/HeaderButtons'
import './index.scss'

export default function Header() {
  return (
    <div className="header-container color-bg--bg-1">
      <SearchBar />
      <HeaderButtons />
    </div>
  )
}
