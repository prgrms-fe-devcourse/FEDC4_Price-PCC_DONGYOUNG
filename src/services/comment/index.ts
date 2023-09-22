import { apiClient } from '@/lib/axios'

interface CommentBody {
  comment: string
  postId: string
  userId?: string
}

interface CommentNotiBody {
  notificationType: 'COMMENT'
  notificationTypeId: string
  postId: string
  userId?: string
}

const postNewCommentNoti = async ({
  notificationType,
  notificationTypeId,
  postId,
  userId,
}: CommentNotiBody) => {
  await apiClient.post('/api/create-comment/notification', {
    notificationType,
    notificationTypeId,
    postId,
    userId,
  })
}

const postNewComment = async ({ comment, postId, userId }: CommentBody) => {
  try {
    const { data } = await apiClient.post('/api/create-comment', {
      postId,
      comment,
    })

    await postNewCommentNoti({
      notificationType: 'COMMENT',
      notificationTypeId: data._id,
      postId,
      userId,
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
