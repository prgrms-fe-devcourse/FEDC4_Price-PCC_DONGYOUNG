import { apiClient } from '@/lib/axios'

interface CommentBody {
  comment: string
  postId: string
}

const postNewComment = async ({ comment, postId }: CommentBody) => {
  try {
    const { data } = await apiClient.post('/api/create-comment', {
      postId,
      comment,
    })
    return data
  } catch (e) {
    if (e instanceof Error) throw new Error(e.message)
  }
}

const deleteComment = async (id: string) => {
  try {
    const { data } = await apiClient.post('/api/cancel-comment', {
      id,
    })
    return data
  } catch (e) {
    if (e instanceof Error) throw new Error(e.message)
  }
}

export { postNewComment, deleteComment }
