'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import Assets from '@/config/assets'
import APP_PATH from '@/config/paths'
import Input from '../Input'
import './index.scss'

export default function SearchBar() {
  const [keyword, setKeyword] = useState('')
  const router = useRouter()
  const pathname = usePathname()

  const handleSearchBar = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }

  const handleEnterKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      keyword.trim() === ''
        ? router.push(APP_PATH.home())
        : router.push(APP_PATH.search(keyword.trim()))
      sessionStorage.setItem('category', 'post')
    }
  }

  useEffect(() => {
    if (!pathname.includes('search')) setKeyword('')
  }, [pathname])

  return (
    <div className="search-bar-container  color-bg--primary-2">
      <Image
        src={Assets.SearchIcon}
        alt="search-icon"
        width={20}
        height={20}
        className="color--gray-2"
      />
      <Input
        placeholder=""
        outline="none"
        borderRadius="rounded-lg"
        onChangeFunction={handleSearchBar}
        onKeyDown={handleEnterKeyPress}
        value={keyword}
      />
    </div>
  )
}
