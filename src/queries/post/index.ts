import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { notify } from '@/components/atoms/Toast'
import { deleteUserPost } from '@/services/post'

export const useDeletePost = (postId: string) => {
  const router = useRouter()
  return useMutation({
    mutationKey: ['useDeletePost', postId],
    mutationFn: async () => {
      const data = await deleteUserPost(postId)
      return data
    },
    onSuccess: () => {
      notify('info', '게시글이 성공적으로 삭제되었습니다.')
      router.back()
    },
  })
}
