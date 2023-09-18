
'use client'

import React, { useCallback } from 'react'
import parse from 'html-react-parser'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Avatar from '@/components/atoms/Avatar'
import { Text } from '@/components/atoms/Text'
import CommentListContainer from '@/components/organisms/CommentList/CommentListContainer'
import { LikeDisLikeContainer } from '@/components/organisms/LikeDisLikeContainer'
import APP_PATH from '@/config/paths'
import { validateToken } from '@/services/auth'
import { postLikeAction } from '@/services/post/like'
import Post from '@/types/post'
import './index.scss'

type PostDetailTemplateProps = {
  postId: string
  initPost: Post
  disLikeChannelPost: Post
}

export async function PostDetailTemplate({
  postId,
  initPost,
  disLikeChannelPost,
}: PostDetailTemplateProps) {
  const router = useRouter()
  const { title, comment, image } = initPost
  const { author } = initPost
  const { mapping_ID } = JSON.parse(title)

  const handleOnClickLikeBtn = useCallback(async () => {
    const isValidateUser = await validateToken()
    if (!isValidateUser) {
      //TODO - 에러 토스트 처리
      router.replace(APP_PATH.login())
      return
    }

    try {
      await postLikeAction(postId)
    } catch (error) {
      //TODO - 해당 경우 에러 처리
    }
  }, [postId, router])

  const handleOnClickDisLikeBtn = useCallback(async () => {
    const isValidateUser = await validateToken()
    if (!isValidateUser) {
      //TODO - 에러 토스트 처리
      router.replace(APP_PATH.login())
      return
    }

    try {
      if (typeof mapping_ID === 'string' && mapping_ID.length > 1) {
        await postLikeAction(mapping_ID)
      }
    } catch (error) {
      //TODO - 해당 경우 에러 처리
    }
  }, [router, mapping_ID])

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

      <Text
        textStyle="heading0-bold"
        style={{
          display: 'flex',
          width: '80%',
          margin: '15px auto',
        }}
      >
        {PostTitle}
      </Text>
      <div className="post-detail__post-container">
        <Text textStyle="body1">{parse(description) as string}</Text>
        {image && (
          <Image
            src={image || ''}
            width={250}
            height={250}
            alt="image"
            style={{
              objectFit: 'cover',
            }}
          />
        )}
      </div>

      <LikeDisLikeContainer
        like={initPost.likes.length}
        dislike={disLikeChannelPost.likes.length}
        onClickLike={handleOnClickLikeBtn}
        onClickDisLike={handleOnClickDisLikeBtn}
      />
      <CommentListContainer postId={postId} initComments={comment} />
    </div>
  )
}
