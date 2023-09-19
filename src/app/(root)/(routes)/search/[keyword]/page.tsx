'use client'

import { usePathname } from 'next/navigation'

export default function Search() {
  const pathname = usePathname()
  console.log(pathname.split('/')[2])

  return <div>검색 페이지</div>
}
