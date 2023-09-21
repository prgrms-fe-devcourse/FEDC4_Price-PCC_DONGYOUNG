import React from 'react'
import parse from 'html-react-parser'
import Image from 'next/image'
import Avatar from '@/components/atoms/Avatar'
import { Text } from '@/components/atoms/Text'
import CommentInput from '@/components/organisms/CommentInput/CommentInput'
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
  const { title: PostTitle, description } = JSON.parse(title)

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

      <LikeDisLikeContainer like={555} dislike={5511} />
      <CommentListContainer postId={postId} initComments={comment} />
      <CommentInput author={author} />
    </div>
  )
}
