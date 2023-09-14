import { useQuery } from '@tanstack/react-query'
import { fetchAllPosts } from '@/services/channel'

const useFetchAllPosts = (channelId: string) => {
  return useQuery({
    queryKey: ['fetchAllPosts', channelId],
    queryFn: async () => {
      const data = await fetchAllPosts(channelId)
      return data
    },
  })
}

export default useFetchAllPosts
