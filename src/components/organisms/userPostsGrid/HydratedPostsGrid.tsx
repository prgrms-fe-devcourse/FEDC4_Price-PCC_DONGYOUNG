import { Hydrate, dehydrate } from '@tanstack/react-query'
import { constants } from '@/config/constants'
import getQueryClient from '@/lib/queryClient'
import { getUserPosts } from '@/services/post'
import UserPostsGrid from '.'

export default async function HydratedPostGrid({ userId }: { userId: string }) {
  const queryClient = getQueryClient()
  await queryClient.prefetchInfiniteQuery(
    ['getUserPostsInfiniteQuery', userId],
    ({ pageParam = 0 }) =>
      getUserPosts({
        authorId: userId,
        limit: constants.INFINITE_LIMIT,
        offset: pageParam,
      }),
  )

  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <UserPostsGrid userId={userId} />
    </Hydrate>
  )
}
