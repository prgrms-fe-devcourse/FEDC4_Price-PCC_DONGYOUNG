import { useInfiniteQuery } from '@tanstack/react-query'
import { constants } from '@/config/constants'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import { getAllPosts } from '@/services/channel'

const useGetAllPosts = () => {
  const { currentUser } = useCurrentUser()
  return useInfiniteQuery({
    queryKey: [
      'getAllPostsInfiniteQuery',
      currentUser?.fullName,
      currentUser?.image,
      currentUser?.notifications,
    ],
    queryFn: ({ pageParam = 0 }) =>
      getAllPosts({
        offset: pageParam,
        limit: constants.INFINITE_LIMIT,
      }),
    getNextPageParam: (_lastPage, allPages) => allPages.flat().length,
  })
}

export default useGetAllPosts
