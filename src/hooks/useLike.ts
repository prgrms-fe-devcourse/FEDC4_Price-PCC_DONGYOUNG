import { useState, useCallback } from 'react'
import { notify } from '@/components/atoms/Toast'
import { POST_CONSTANT } from '@/constants/post'
import { getPostDetail } from '@/services/post'
import { postLikeAction, postLikeCancelAction } from '@/services/post/like'
import Post from '@/types/post'
import { useCurrentUser } from './useCurrentUser'

type useLikeProps = {
  postId: string
  initPost: Post
  disLikePost: Post
  fetchDisLike: () => Promise<Post | void>
}

export default function useLike({
  initPost,
  disLikePost,
  postId,
  fetchDisLike,
}: useLikeProps) {
  const [post, setLikePost] = useState<Post>(initPost)
  const { isLoggedIn, currentUser } = useCurrentUser()

  const handleOnClickLike = useCallback(async () => {
    if (!isLoggedIn) {
      notify('error', POST_CONSTANT.LIKE_ERROR)
      return
    }

    try {
      const { _id, likes } = post
      const hasLikedPost = likes.some((like) => like.user === currentUser?._id)
      const hasDisLikedPost = disLikePost.likes.some(
        (like) => like.user === currentUser?._id,
      )
      if (!hasLikedPost) {
        await postLikeAction(_id)
        await getPostDetail(postId).then(({ post }) => setLikePost(post))

        if (hasDisLikedPost && currentUser) {
          const disLikeID = disLikePost.likes.filter(
            (like) => like.user === currentUser._id,
          )[0]._id
          await postLikeCancelAction(disLikeID)
          await fetchDisLike()
        }

        return
      } else if (currentUser) {
        const likeId = likes.filter((like) => like.user === currentUser._id)[0]
          ._id

        await postLikeCancelAction(likeId)
        await getPostDetail(postId).then(({ post }) => setLikePost(post))

        return
      }
    } catch (error) {
      notify('error', POST_CONSTANT.LIKE_API_ERROR)
    }
  }, [isLoggedIn, post, disLikePost.likes, currentUser, postId, fetchDisLike])

  return { handleOnClickLike, post, setLikePost }
}
