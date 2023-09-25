import { Hydrate, dehydrate } from '@tanstack/react-query'
import { constants } from '@/config/constants'
import getQueryClient from '@/lib/queryClient'
import { getAllPosts } from '@/services/channel'
import GridController from './GridController'

export default async function HydrateCardGrid() {
  const queryClient = getQueryClient()
  await queryClient.prefetchInfiniteQuery(
    ['getAllPostsInfiniteQuery'],
    ({ pageParam = 0 }) =>
      getAllPosts({
        limit: constants.INFINITE_LIMIT,
        offset: pageParam,
      }),
  )

  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <GridController />
    </Hydrate>
  )
}
