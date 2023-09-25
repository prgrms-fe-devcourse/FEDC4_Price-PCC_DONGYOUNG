import { useState, useCallback } from 'react'
import { notify } from '@/components/atoms/Toast'
import { POST_CONSTANT } from '@/constants/post'
import { getPostDetail } from '@/services/post'
import { postLikeAction, postLikeCancelAction } from '@/services/post/like'
import Post from '@/types/post'
import { useCurrentUser } from './useCurrentUser'

type useLikeProps = {
  initPost: Post
  likePost: Post
  postId: string
  fetchLike: () => Promise<Post | void>
}

export default function useDisLike({
  initPost,
  likePost,
  postId,
  fetchLike,
}: useLikeProps) {
  const [post, setDisLikePost] = useState<Post>(initPost)
  const { isLoggedIn, currentUser } = useCurrentUser()

  const handleOnClickDisLike = useCallback(async () => {
    if (!isLoggedIn) {
      notify('error', POST_CONSTANT.DISLIKE_ERROR)
      return
    }

    const hasLikedPost = likePost?.likes.some(
      (like) => like.user === currentUser?._id,
    )

    //해당 게시글을 싫어요를 했는지?
    const hasDislikedPost = post?.likes.some(
      (disLike) => disLike.user === currentUser?._id,
    )

    try {
      if (!hasDislikedPost) {
        await postLikeAction(initPost?._id)
        await getPostDetail(postId).then(({ post }) => setDisLikePost(post))

        if (hasLikedPost) {
          const likeId = likePost?.likes.filter(
            (like) => like.user === currentUser?._id,
          )[0]._id
          await postLikeCancelAction(likeId)
          await fetchLike()
        }

        return
      }

      //싫어요를 이미 한 경우
      else if (hasDislikedPost) {
        const disLikeID = post.likes.filter(
          (like) => like.user === currentUser?._id,
        )[0]._id
        await postLikeCancelAction(disLikeID)

        await getPostDetail(postId).then(({ post }) => setDisLikePost(post))
        return
      }
    } catch (error) {
      notify('error', POST_CONSTANT.DISLIKE_API_ERROR)
    }
  }, [
    isLoggedIn,
    likePost?.likes,
    post?.likes,
    currentUser?._id,
    initPost?._id,
    postId,
    fetchLike,
  ])

  return { handleOnClickDisLike, post, setDisLikePost }
}
