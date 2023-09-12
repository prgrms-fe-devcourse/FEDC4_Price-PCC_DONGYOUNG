import { dehydrate } from '@tanstack/react-query'
import { headers } from 'next/headers'
import DarkModeButton from '@/components/atoms/DarkModeButton'
import ReactQueryHydrate from '@/components/hydrate-client'
import getQueryClient from '@/lib/get-query-client'
import { getPostDetail } from '@/services/post'

export default async function Post() {
  const postHeaders = headers()
  const getPathName = postHeaders.get('x-invoke-path')?.replaceAll('/post/', '')
  const initPost = await getPostDetail(getPathName || '')

  const queryClient = getQueryClient()
  await queryClient.prefetchInfiniteQuery(['postDetail'], initPost)
  const dehydrateState = dehydrate(queryClient)

  return (
    <ReactQueryHydrate state={dehydrateState}>
      <div>
        <DarkModeButton />
      </div>
    </ReactQueryHydrate>
  )
}
