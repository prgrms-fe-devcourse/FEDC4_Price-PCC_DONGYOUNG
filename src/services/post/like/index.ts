import { apiClient } from '@/lib/axios'

export const postLikeAction = async (postId: string) => {
  const postLikeActionRes = await apiClient.post('/api/like', {
    postId,
  })

  return postLikeActionRes
}
