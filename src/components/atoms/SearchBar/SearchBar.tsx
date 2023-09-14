'use client'

import { useState } from 'react'
import Image from 'next/image'
import Assets from '@/config/assets'
import Input from '../Input'
import './index.scss'

export default function SearchBar() {
  const [keyword, setKeyword] = useState('')

  const handleSearchBar = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
    console.log(keyword)
  }

  const handleEnterKeyPress = (
    keyEvent: React.KeyboardEvent<HTMLInputElement>,
    changeEvent: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (keyEvent.key === 'Enter') {
      handleSearchBar(changeEvent)
    }
  }

  return (
    <div className="search-bar-container  color-bg--primary-2">
      <Image
        src={Assets.SearchIcon}
        alt="search-icon"
        width={30}
        height={30}
        className="color--gray-2"
      />
      <Input
        placeholder=""
        outline="none"
        borderRadius="rounded-lg"
        onChangeFunction={handleSearchBar}
        /*onKeyDown={handleEnterKeyPress}*/
      />
    </div>
  )
}
