'use client'

import { usePathname } from 'next/navigation'
import { searchData } from '@/services/search'

export default function Search() {
  const pathname = usePathname()
  const keyword = pathname.split('/')[2]
  console.log(searchData(keyword))

  return <div>검색 페이지</div>
}
