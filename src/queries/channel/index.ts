import { useInfiniteQuery } from '@tanstack/react-query'
import { getAllPosts } from '@/services/channel'

const useGetAllPosts = (channelId: string) => {
  const LIMIT = 10

  return useInfiniteQuery({
    queryKey: ['getAllPostsInfiniteQuery'],
    queryFn: ({ pageParam = 0 }) =>
      getAllPosts({ channelId, offset: pageParam, limit: LIMIT }),
    getNextPageParam: (lastPage, allPages) => allPages.flat().length,
  })
}

export default useGetAllPosts
