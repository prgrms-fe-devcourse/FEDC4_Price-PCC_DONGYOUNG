import { useInfiniteQuery } from '@tanstack/react-query'
import { constants } from '@/config/constants'
import { getAllPosts } from '@/services/channel'

const useGetAllPosts = () => {
  return useInfiniteQuery({
    queryKey: ['getAllPostsInfiniteQuery'],
    queryFn: ({ pageParam = 0 }) =>
      getAllPosts({
        offset: pageParam,
        limit: constants.INFINITE_LIMIT,
      }),
    getNextPageParam: (_lastPage, allPages) => allPages.flat().length,
  })
}

export default useGetAllPosts
