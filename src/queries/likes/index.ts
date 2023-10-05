import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query'
import { getPostDetail } from '@/services/post'
import { postLikeAction, postLikeCancelAction } from '@/services/post/like'
import type Post from '@/types/post'
import User from '@/types/user'

type useLikeProps = {
  initPost: Post
  initDisLikePost: Post
  currentUser?: User
}

export function useGetPostLikesQuery(postId: string, initPost: Post) {
  return useQuery({
    queryKey: ['post', postId],
    queryFn: async () => {
      const postDetail = await getPostDetail(postId)
      const { post }: { post: Post } = postDetail
      return post
    },
    initialData: initPost,
  })
}

export function useLikeMutate({
  initPost,
  initDisLikePost,
  currentUser,
}: useLikeProps) {
  const queryClient = useQueryClient()

  const likeMutation = useMutation(
    async () => {
      const prevPost = queryClient.getQueryData(['post', initPost._id]) as Post

      if (prevPost.likes.some((like) => like.user === currentUser?._id)) {
        const previousLikedPost = prevPost.likes.filter(
          (like) => like.user === currentUser?._id,
        )[0]._id

        queryClient.setQueryData(['post', initPost._id], {
          ...prevPost,
          likes: prevPost.likes.filter(
            (like) => like.user !== currentUser?._id,
          ),
        })
        await postLikeCancelAction(previousLikedPost)
      } else {
        queryClient.setQueryData(['post', initPost._id], {
          ...prevPost,
          likes: [
            ...prevPost.likes,
            {
              _id: '',
              user: currentUser?._id,
            },
          ],
        })
        await postLikeAction(initPost._id)
      }
    },
    {
      onMutate: async () => {
        await queryClient.invalidateQueries(['post', initPost._id])
      },
    },
  )

  const disLikeMutation = useMutation(
    async () => {
      const prevDisLikePost = queryClient.getQueryData([
        'post',
        initDisLikePost._id,
      ]) as Post

      if (
        prevDisLikePost.likes.some((like) => like.user === currentUser?._id)
      ) {
        const previousLikedPost = prevDisLikePost.likes.filter(
          (like) => like.user === currentUser?._id,
        )[0]._id

        queryClient.setQueryData(['post', initDisLikePost._id], {
          ...prevDisLikePost,
          likes: prevDisLikePost.likes.filter(
            (like) => like.user !== currentUser?._id,
          ),
        })
        await postLikeCancelAction(previousLikedPost)
      } else {
        queryClient.setQueryData(['post', initDisLikePost._id], {
          ...prevDisLikePost,
          likes: [
            ...prevDisLikePost.likes,
            {
              _id: '',
              user: currentUser?._id,
            },
          ],
        })
        await postLikeAction(initDisLikePost._id)
      }
    },
    {
      onMutate: async () => {
        await queryClient.invalidateQueries(['post', initDisLikePost._id])
      },
    },
  )

  return {
    likeMutation,
    disLikeMutation,
  }
}
