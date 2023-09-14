import React from 'react'
import Image from 'next/image'
import Avatar from '@/components/atoms/Avatar'
import CommentListContainer from '@/components/organisms/CommentList/CommentListContainer'
import { LikeDisLikeContainer } from '@/components/organisms/LikeDisLikeContainer'
import Post from '@/types/post'
import './index.scss'

type PostDetailTemplateProps = {
  postId: string
  initPost: Post
}

export async function PostDetailTemplate({
  postId,
  initPost,
}: PostDetailTemplateProps) {
  const { title, comment, image } = initPost
  const { author } = initPost

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

      <LikeDisLikeContainer like={555} dislike={5511} />
      <CommentListContainer postId={postId} initComments={comment} />
    </div>
  )
}
