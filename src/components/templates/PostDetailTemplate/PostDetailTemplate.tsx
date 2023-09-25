'use client'

import React, { useMemo } from 'react'
import parse from 'html-react-parser'
import Image from 'next/image'
import Link from 'next/link'
import Avatar from '@/components/atoms/Avatar'
import { Text } from '@/components/atoms/Text'
import PostOptionsDropdown from '@/components/molcules/PostOptionsDropdown'
import CommentInput from '@/components/organisms/CommentInput/CommentInput'
import CommentListContainer from '@/components/organisms/CommentList/CommentListContainer'
import { LikeDisLikeContainer } from '@/components/organisms/LikeDisLikeContainer'
import APP_PATH from '@/config/paths'
import useDisLike from '@/hooks/useDisLike'
import useLike from '@/hooks/useLike'
import { useAuth } from '@/lib/contexts/authProvider'
import { postNewComment } from '@/services/comment'
import { getPostDetail } from '@/services/post'
import Post from '@/types/post'
import './index.scss'

type PostDetailTemplateProps = {
  postId: string
  initPost: Post
  initDisLikeChannelPost: Post
}

export function PostDetailTemplate({
  postId,
  initPost,
  initDisLikeChannelPost,
}: PostDetailTemplateProps) {
  const { title, comment, image, author, _id } = initPost
  const { currentUser, isLoggedIn } = useAuth()

  const { title: postTitle, description } = JSON.parse(title)
  const cachedCurrentUser = useMemo(() => currentUser, [currentUser])
  const isEqualUser = cachedCurrentUser?._id === author._id

  const { post, handleOnClickLike, setLikePost } = useLike({
    initPost,
    disLikePost: initDisLikeChannelPost,
    postId: initPost._id,
    fetchDisLike: () =>
      getPostDetail(initDisLikeChannelPost._id).then(({ post }) =>
        setDisLikePost(post),
      ),
  })
  const {
    post: disLikePost,
    handleOnClickDisLike,
    setDisLikePost,
  } = useDisLike({
    initPost: initDisLikeChannelPost,
    likePost: initPost,
    postId: initDisLikeChannelPost._id,
    fetchLike: async () =>
      await getPostDetail(initPost._id).then(({ post }) => setLikePost(post)),
  })

  const initLikeState = post.likes.some(
    (like) => like.user === currentUser?._id,
  )
  const initDisLikeState = disLikePost.likes.some(
    (dislike) => dislike.user === currentUser?._id,
  )

  const initState =
    initLikeState && initDisLikeState
      ? 'both'
      : initLikeState
      ? 'like'
      : initDisLikeState
      ? 'dislike'
      : 'init'
  //좋아요를 누른 상태라면 좋아요 취소 요청을 보내고 싫어요 요청 ㄱ

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
        {isEqualUser && <PostOptionsDropdown postId={_id} size={2} />}
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
        initalState={initState}
        like={post?.likes?.length || 0}
        dislike={disLikePost?.likes?.length || 0}
        onClickLike={handleOnClickLike}
        onClickDisLike={handleOnClickDisLike}
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
