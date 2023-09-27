import { redirect } from 'next/navigation'
import SearchPageTemplate from '@/components/templates/SearchPageTemplate'
import { getSearchData } from '@/services/search'

type keywordProps = {
  params: {
    keyword: string
  }
}

export default async function Search({ params }: keywordProps) {
  const data = await getSearchData(params.keyword).catch(() => {
    redirect('/')
  })

  return <SearchPageTemplate data={data}></SearchPageTemplate>
}
