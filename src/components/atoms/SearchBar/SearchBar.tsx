import Image from 'next/image'
import Assets from '@/config/assets'
import Input from '../Input'
import './index.scss'

export default function SearchBar() {
  const handleSearchBar = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('handle')
    console.log(e.target.value)
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
      />
    </div>
  )
}
