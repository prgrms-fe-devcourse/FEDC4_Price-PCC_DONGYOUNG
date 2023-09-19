'use client'

import React, { useCallback, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Avatar from '@/components/atoms/Avatar'
import CommentListContainer from '@/components/organisms/CommentList/CommentListContainer'
import { LikeDisLikeContainer } from '@/components/organisms/LikeDisLikeContainer'
import APP_PATH from '@/config/paths'
import { validateToken } from '@/services/auth'
import { getPostDetail } from '@/services/post'
import { postLikeAction, postLikeCancelAction } from '@/services/post/like'
import Post from '@/types/post'
import './index.scss'

type PostDetailTemplateProps = {
  postId: string
  initPost: Post
  disLikeChannelPost: Post
}

export function PostDetailTemplate({
  postId,
  initPost,
  disLikeChannelPost,
}: PostDetailTemplateProps) {
  const router = useRouter()
  const { title, comment, image, author } = initPost
  const { mapping_ID } = JSON.parse(title)

  const [likeChannelPost, setLikeChannelPost] = useState<Post>(initPost)
  const [dislikeChannelPost, setDislikeChannelPost] =
    useState<Post>(disLikeChannelPost)

  const handleOnClickLikeBtn = useCallback(async () => {
    const isValidateUser = await validateToken()
    if (!isValidateUser) {
      //TODO - 에러 토스트 처리
      router.replace(APP_PATH.login())
      return
    }

    try {
      const { _id, likes } = likeChannelPost
      const hasLikedPost = likes.some(
        (like) => like.user === isValidateUser?._id,
      )

      //좋아요를 아직 하지 않은 경우
      if (!hasLikedPost) {
        await postLikeAction(_id)
        await getPostDetail(_id).then(({ post }) => {
          setLikeChannelPost(post)
        })
        return
      }

      //좋아요를 한 경우
      //좋아요의 ID를 뽑아옴
      else {
        const likeId = likes.filter(
          (like) => like.user === isValidateUser?._id,
        )[0]._id

        await postLikeCancelAction(likeId)
        await getPostDetail(_id).then(({ post }) => {
          setLikeChannelPost(post)
        })

        return
      }
    } catch (error) {
      //TODO - 해당 경우 에러 처리
    }
  }, [router, likeChannelPost])

  const handleOnClickDisLikeBtn = useCallback(async () => {
    const isValidateUser = await validateToken()
    if (!isValidateUser) {
      //TODO - 에러 토스트 처리
      router.replace(APP_PATH.login())
      return
    }

    try {
      //TODO - 해당 validate 분리. 검증 조건 추가 필요
      if (typeof mapping_ID !== 'string' || mapping_ID.length < 1) {
        return
      }

      const { likes } = dislikeChannelPost

      //해당 게시글을 싫어요를 했는지?
      const hasDislikedPost = likes.some(
        (disLike) => disLike.user === isValidateUser?._id,
      )

      //아직 싫어요를 안한 경우
      if (!hasDislikedPost) {
        await postLikeAction(mapping_ID)
        await getPostDetail(mapping_ID).then(({ post }) => {
          setDislikeChannelPost(post)
        })

        return
      }

      //싫어요를 이미 한 경우
      else {
        const disLikeID = likes.filter(
          (like) => like.user === isValidateUser?._id,
        )[0]._id
        await postLikeCancelAction(disLikeID)
        await getPostDetail(mapping_ID).then(({ post }) => {
          setDislikeChannelPost(post)
        })
        return
      }
    } catch (error) {
      //TODO - 해당 경우 에러 처리
    }
  }, [router, mapping_ID, dislikeChannelPost])

  return (
    <div className="post-detail">
      <div className="post-detail__avatar-container">
        <Avatar
          size={5}
          src={initPost?.author?.image || ''}
          text={author.fullName}
          textStyle={{
            fontWeight: 'bold',
            marginLeft: '15px',
          }}
        />
      </div>

      <div className="post-detail__post-container">
        <h1>{title}</h1>
        {image && (
          <Image src={image || ''} width={30} height={30} alt="image" />
        )}
      </div>

      <LikeDisLikeContainer
        like={likeChannelPost.likes.length}
        dislike={dislikeChannelPost.likes.length}
        onClickLike={handleOnClickLikeBtn}
        onClickDisLike={handleOnClickDisLikeBtn}
      />
      <CommentListContainer postId={postId} initComments={comment} />
    </div>
  )
}
