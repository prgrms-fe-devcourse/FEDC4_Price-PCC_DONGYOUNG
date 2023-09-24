import { useInfiniteQuery } from '@tanstack/react-query'
import { constants } from '@/config/constants'
import { getAllPosts } from '@/services/channel'
import User from '@/types/user'

const useGetAllPosts = (user?: User) => {
  return useInfiniteQuery({
    queryKey: ['getAllPostsInfiniteQuery', user],
    queryFn: ({ pageParam = 0 }) =>
      getAllPosts({
        offset: pageParam,
        limit: constants.INFINITE_LIMIT,
      }),
    getNextPageParam: (lastPage, allPages) => allPages.flat().length,
  })
}

export default useGetAllPosts
