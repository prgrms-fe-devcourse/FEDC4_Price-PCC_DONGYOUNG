import Image from 'next/image'
import Assets from '@/config/assets'
import './index.scss'

export default function SearchBar() {
  return (
    <div className="color-bg--primary-2">
      <Image
        src={Assets.SearchIcon}
        alt="search-icon"
        fill
        className="color--gray-2"
      />
      <input />
    </div>
  )
}
