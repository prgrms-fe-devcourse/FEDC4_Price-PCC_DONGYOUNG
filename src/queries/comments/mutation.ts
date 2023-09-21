import { useQueryClient, useMutation } from '@tanstack/react-query'
import { postNewComment } from '@/services/comment'

const useSubmitComment = ({
  postId,
  comment,
}: {
  postId: string
  comment: string
}) => {
  const queryClient = useQueryClient()

  const mutation = useMutation(
    async () => {
      const { data } = await postNewComment({
        postId,
        comment,
      })
      return data
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['getComments', postId])
      },
    },
  )

  return mutation
}

export default useSubmitComment
