import { useQuery } from '@tanstack/react-query'
import { getPostDetail } from '@/services/post'
import type Comment from '@/types/comment'

const useGetComment = (postId: string, initComments?: Comment[]) => {
  return useQuery({
    queryFn: async () => {
      const data = await getPostDetail(postId)
      return data
    },
    initialData: [initComments],
  })
}

export default useGetComment
