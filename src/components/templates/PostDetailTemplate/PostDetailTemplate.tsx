'use client'

import React, { useCallback, useState, useMemo } from 'react'
import parse from 'html-react-parser'
import Image from 'next/image'
import Link from 'next/link'
import Avatar from '@/components/atoms/Avatar'
import { Text } from '@/components/atoms/Text'
import { notify } from '@/components/atoms/Toast'
import PostOptionsDropdown from '@/components/molcules/PostOptionsDropdown'
import CommentInput from '@/components/organisms/CommentInput/CommentInput'
import CommentListContainer from '@/components/organisms/CommentList/CommentListContainer'
import { LikeDisLikeContainer } from '@/components/organisms/LikeDisLikeContainer'
import APP_PATH from '@/config/paths'
import { POST_CONSTANT } from '@/constants/post'
import { useAuth } from '@/lib/contexts/authProvider'
import { postNewComment } from '@/services/comment'
import { getPostDetail } from '@/services/post'
import { postLikeAction, postLikeCancelAction } from '@/services/post/like'
import Post from '@/types/post'
import './index.scss'

type PostDetailTemplateProps = {
  postId: string
  initPost: Post
  initDisLikeChannelPost: Post
  mapping_ID: string
}

export function PostDetailTemplate({
  postId,
  initPost,
  initDisLikeChannelPost,
  mapping_ID,
}: PostDetailTemplateProps) {
  const { title, comment, image, author, _id } = initPost
  const { currentUser, isLoggedIn } = useAuth()

  const { title: postTitle, description } = JSON.parse(title)
  const cachedCurrentUser = useMemo(() => currentUser, [currentUser])
  const isEqualUser = cachedCurrentUser?._id === author._id

  const [likeChannelPost, setLikeChannelPost] = useState<Post>(initPost)
  const [dislikeChannelPost, setDislikeChannelPost] = useState<Post>(
    initDisLikeChannelPost,
  )

  //좋아요를 누른 상태라면 좋아요 취소 요청을 보내고 싫어요 요청 ㄱ

  const handleOnClickLikeBtn = useCallback(async () => {
    if (!isLoggedIn) {
      notify('error', POST_CONSTANT.LIKE_ERROR)
      return
    }

    try {
      const { _id, likes } = likeChannelPost

      const { _id: _dislikeChannelId, likes: _dislikeChannelLikes } =
        dislikeChannelPost

      const hasLikedPost = likes.some(
        (like) => like.user === cachedCurrentUser?._id,
      )
      const hasDisLikedPost = _dislikeChannelLikes.some(
        (like) => like.user === cachedCurrentUser?._id,
      )

      //좋아요를 아직 하지 않은 경우 좋아요 요청을 보내고 싫어요 취소 요청
      if (!hasLikedPost) {
        await postLikeAction(_id)
        await getPostDetail(_id).then(({ post }) => {
          setLikeChannelPost(post)
        })

        if (hasDisLikedPost) {
          const disLikeID = dislikeChannelPost.likes.filter(
            (like) => like.user === cachedCurrentUser?._id,
          )[0]._id
          await postLikeCancelAction(disLikeID)
          await getPostDetail(mapping_ID).then(({ post }) => {
            setDislikeChannelPost(post)
          })
        }

        return
      }

      //좋아요를 한 경우
      //좋아요의 ID를 뽑아옴
      else {
        const likeId = likes.filter(
          (like) => like.user === cachedCurrentUser?._id,
        )[0]._id

        await postLikeCancelAction(likeId)
        await getPostDetail(_id).then(({ post }) => {
          setLikeChannelPost(post)
        })
        if (!hasDisLikedPost) {
          await postLikeAction(mapping_ID)
          await getPostDetail(mapping_ID).then(({ post }) => {
            setDislikeChannelPost(post)
          })
        }

        return
      }
    } catch (error) {
      notify('error', POST_CONSTANT.LIKE_API_ERROR)
    }
  }, [
    isLoggedIn,
    likeChannelPost,
    dislikeChannelPost,
    cachedCurrentUser?._id,
    mapping_ID,
  ])

  //싫어요를 누른 상태라면 싫어요 취소 요청을 보내고 좋아요 요청 ㄱ
  //싫어요를 누르지 않은 상태라면 싫어요 요청을 보내고 좋아요 취소 요청 ㄱ

  const handleOnClickDisLikeBtn = useCallback(async () => {
    if (!isLoggedIn) {
      notify('error', POST_CONSTANT.DISLIKE_ERROR)
      return
    }

    try {
      //TODO - 해당 validate 분리. 검증 조건 추가 필요
      if (typeof mapping_ID !== 'string' || mapping_ID.length < 1) {
        return
      }

      const { likes } = dislikeChannelPost

      const hasLikedPost = likeChannelPost.likes.some(
        (like) => like.user === cachedCurrentUser?._id,
      )

      //해당 게시글을 싫어요를 했는지?
      const hasDislikedPost = likes.some(
        (disLike) => disLike.user === cachedCurrentUser?._id,
      )

      //아직 싫어요를 안한 경우
      if (!hasDislikedPost) {
        await postLikeAction(mapping_ID)
        await getPostDetail(mapping_ID).then(({ post }) => {
          setDislikeChannelPost(post)
        })

        if (hasLikedPost) {
          const likeId = likeChannelPost.likes.filter(
            (like) => like.user === cachedCurrentUser?._id,
          )[0]._id
          await postLikeCancelAction(likeId)
          await getPostDetail(likeChannelPost._id).then(({ post }) => {
            setLikeChannelPost(post)
          })
        }

        return
      }

      //싫어요를 이미 한 경우
      else {
        const disLikeID = likes.filter(
          (like) => like.user === cachedCurrentUser?._id,
        )[0]._id
        await postLikeCancelAction(disLikeID)
        await getPostDetail(mapping_ID).then(({ post }) => {
          setDislikeChannelPost(post)
        })

        await postLikeAction(likeChannelPost._id)
        await getPostDetail(likeChannelPost._id).then(({ post }) => {
          setLikeChannelPost(post)
        })
        return
      }
    } catch (error) {
      notify('error', POST_CONSTANT.DISLIKE_API_ERROR)
    }
  }, [
    isLoggedIn,
    mapping_ID,
    dislikeChannelPost,
    likeChannelPost.likes,
    likeChannelPost._id,
    cachedCurrentUser?._id,
  ])

  return (
    <div className="post-detail">
      <div className="post-detail__header">
        <Link href={APP_PATH.userProfile(author._id)} prefetch={false}>
          <Avatar
            size={5}
            src={initPost?.author?.image ?? ''}
            text={author.fullName}
          ></Avatar>
        </Link>
        {isEqualUser && <PostOptionsDropdown postId={_id} />}
      </div>
      <Text
        textStyle="heading0-bold"
        style={{
          display: 'flex',
          width: '80%',
          margin: '0 auto',
        }}
      >
        {parse(postTitle)}
      </Text>
      <div className="post-detail__post-container">
        <Text textStyle="body1">{parse(description)}</Text>
        {image && (
          <Image src={image || ''} width={250} height={250} alt="image" />
        )}
      </div>

      <LikeDisLikeContainer
        like={likeChannelPost?.likes?.length || 0}
        dislike={dislikeChannelPost?.likes?.length || 0}
        onClickLike={handleOnClickLikeBtn}
        onClickDisLike={handleOnClickDisLikeBtn}
      />
      <CommentListContainer postId={postId} initComments={comment} />
      {isLoggedIn && currentUser && (
        <CommentInput
          postId={postId}
          author={currentUser}
          onSubmit={async (comment) =>
            await postNewComment({ comment, postId, userId: author._id })
          }
        />
      )}
    </div>
  )
}
