import { useState } from 'react'
import { notify } from '@/components/atoms/Toast'
import { POST_CONSTANT } from '@/constants/post'
import { getPostDetail } from '@/services/post'
import { postLikeAction, postLikeCancelAction } from '@/services/post/like'
import Post from '@/types/post'
import { useCurrentUser } from './useCurrentUser'

type useLikeProps = {
  initPost: Post
  initDisLikePost: Post
}

export default function useLike({ initPost, initDisLikePost }: useLikeProps) {
  const [post, setLikePost] = useState<Post>(initPost)
  const [disLikePost, setDisLikePost] = useState<Post>(initDisLikePost)
  const { isLoggedIn, currentUser } = useCurrentUser()

  const handleOnClickLike = async () => {
    if (!isLoggedIn) {
      notify('error', POST_CONSTANT.LIKE_ERROR)
      return
    }

    try {
      const { _id, likes } = post

      const { _id: _dislikeChannelId, likes: _dislikeChannelLikes } =
        disLikePost

      const hasLikedPost = likes.some((like) => like.user === currentUser?._id)
      const hasDisLikedPost = _dislikeChannelLikes.some(
        (like) => like.user === currentUser?._id,
      )

      //좋아요를 아직 하지 않은 경우 좋아요 요청을 보내고 싫어요 취소 요청
      if (!hasLikedPost) {
        await postLikeAction(_id)
        await getPostDetail(_id).then(({ post }) => {
          setLikePost(post)
        })

        if (hasDisLikedPost) {
          const disLikeID = disLikePost?.likes?.filter(
            (like) => like.user === currentUser?._id,
          )[0]._id
          await postLikeCancelAction(disLikeID)
          await getPostDetail(initDisLikePost._id).then(({ post }) => {
            setDisLikePost(post)
          })
        }

        return
      }

      //좋아요를 한 경우
      //좋아요의 ID를 뽑아옴
      else {
        const likeId = likes.filter((like) => like.user === currentUser?._id)[0]
          ._id

        await postLikeCancelAction(likeId)
        await getPostDetail(_id).then(({ post }) => {
          setLikePost(post)
        })
        if (!hasDisLikedPost) {
          await postLikeAction(disLikePost._id)
          await getPostDetail(disLikePost._id).then(({ post }) => {
            setDisLikePost(post)
          })
        }

        return
      }
    } catch (error) {
      notify('error', POST_CONSTANT.LIKE_API_ERROR)
    }
  }

  const handleOnClickDisLikeBtn = async () => {
    if (!isLoggedIn) {
      notify('error', POST_CONSTANT.DISLIKE_ERROR)
      return
    }

    try {
      const { likes } = disLikePost

      const hasLikedPost = post.likes.some(
        (like) => like.user === currentUser?._id,
      )

      //해당 게시글을 싫어요를 했는지?
      const hasDislikedPost = likes.some(
        (disLike) => disLike.user === currentUser?._id,
      )

      //아직 싫어요를 안한 경우
      if (!hasDislikedPost) {
        await postLikeAction(disLikePost._id)
        await getPostDetail(disLikePost._id).then(({ post }) => {
          setDisLikePost(post)
        })

        if (hasLikedPost) {
          const likeId = post.likes.filter(
            (like) => like.user === currentUser?._id,
          )[0]._id
          await postLikeCancelAction(likeId)
          await getPostDetail(post._id).then(({ post }) => {
            setLikePost(post)
          })
        }

        return
      }

      //싫어요를 이미 한 경우
      else {
        const disLikeID = likes.filter(
          (like) => like.user === currentUser?._id,
        )[0]._id
        await postLikeCancelAction(disLikeID)
        await getPostDetail(disLikePost._id).then(({ post }) => {
          setDisLikePost(post)
        })

        await postLikeAction(post._id)
        await getPostDetail(post._id).then(({ post }) => {
          setLikePost(post)
        })
        return
      }
    } catch (error) {
      notify('error', POST_CONSTANT.DISLIKE_API_ERROR)
    }
  }

  return { handleOnClickDisLikeBtn, handleOnClickLike, post, disLikePost }
}
