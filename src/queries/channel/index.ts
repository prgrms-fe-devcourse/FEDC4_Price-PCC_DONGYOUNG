import { useQuery } from '@tanstack/react-query'
import { getAllPosts } from '@/services/channel'

const useGetAllPosts = (channelId: string) => {
  return useQuery({
    queryKey: ['getAllPosts', channelId],
    queryFn: async () => {
      const data = await getAllPosts(channelId)
      return data
    },
  })
}

export default useGetAllPosts
