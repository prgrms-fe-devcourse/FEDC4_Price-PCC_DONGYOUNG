import { useInfiniteQuery } from '@tanstack/react-query'
import { constants } from '@/config/constants'
import { getUserPosts } from '@/services/post'

const useGetUserPosts = (userId: string) => {
  return useInfiniteQuery({
    queryKey: ['getUserPostsInfiniteQuery', userId],
    queryFn: ({ pageParam = 0 }) =>
      getUserPosts({
        authorId: userId,
        offset: pageParam,
        limit: constants.INFINITE_LIMIT,
      }),
    getNextPageParam: (_lastPage, allPages) => allPages.flat().length,
  })
}

export default useGetUserPosts
