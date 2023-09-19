import { searchData } from '@/services/search'

type keywordProps = {
  params: {
    keyword: string
  }
}

export default async function Search({ params }: keywordProps) {
  console.log('params.keyword = ', params.keyword)
  const data = await searchData(params.keyword).catch((error) => {
    console.log('error = ', error)
  })
  console.log(data)

  return <></>
}
