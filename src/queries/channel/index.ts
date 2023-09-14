import { useInfiniteQuery } from '@tanstack/react-query'
import { getAllPosts } from '@/services/channel'

const useGetAllPosts = (channelId: string) => {
  const LIMIT = 5

  return useInfiniteQuery({
    queryKey: ['getAllPostsInfiniteQuery'],
    queryFn: ({ pageParam = 0 }) =>
      getAllPosts({ channelId, offset: pageParam, limit: LIMIT }),
  })
}

export default useGetAllPosts
