import { redirect } from 'next/navigation'
import { searchData } from '@/services/search'

type keywordProps = {
  params: {
    keyword: string
  }
}

export default async function Search({ params }: keywordProps) {
  const data = await searchData(params.keyword).catch(() => {
    redirect('/')
  })

  console.log(data)

  return <></>
}
