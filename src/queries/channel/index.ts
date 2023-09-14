import { useInfiniteQuery } from '@tanstack/react-query'
import { constants } from '@/config/constants'
import { getAllPosts } from '@/services/channel'

const useGetAllPosts = (channelId: string) => {
  return useInfiniteQuery({
    queryKey: ['getAllPostsInfiniteQuery'],
    queryFn: ({ pageParam = 0 }) =>
      getAllPosts({
        channelId,
        offset: pageParam,
        limit: constants.INFINITE_LIMIT,
      }),
    getNextPageParam: (lastPage, allPages) => allPages.flat().length,
  })
}

export default useGetAllPosts
