import { apiClient } from '@/lib/axios'

export const postLikeAction = async (postId: string) => {
  const postLikeActionRes = await apiClient.post('/api/likes', {
    postId,
  })

  return postLikeActionRes
}

export const postLikeCancelAction = async (id: string) => {
  const postLikeCancelActionRes = await apiClient.post('/api/likes-cancel', {
    id,
  })

  return postLikeCancelActionRes
}
