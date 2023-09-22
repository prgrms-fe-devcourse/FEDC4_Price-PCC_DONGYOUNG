'use client'

import { useCallback } from 'react'
import { FaTrash } from 'react-icons/fa'
import Avatar from '@/components/atoms/Avatar'
import { Text } from '@/components/atoms/Text'
import type { default as CommentProps } from '@/types/comment'
import './index.scss'

type CommentPropsWithChild = CommentProps & {
  children?: React.ReactNode
  isValid?: boolean
  onDeleteComment?: (_commentId: string) => void
}

type CommentAuthorProps = Pick<CommentProps, 'author'>

type CommentItemProps = Pick<CommentProps, 'comment' | 'createdAt'> & {
  children?: React.ReactNode
}

export default function Comment({
  comment,
  author,
  isValid,
  children,
  _id,
  createdAt,
  onDeleteComment,
}: CommentPropsWithChild) {
  const handleDeleteComment = useCallback(
    (_id: string) => {
      if (onDeleteComment) onDeleteComment(_id)
    },
    [onDeleteComment],
  )
  return (
    <div className="comment__container">
      <User author={author} />
      <CommentItem comment={comment} createdAt={createdAt}>
        {isValid && (
          <span
            className="comment__container_delete"
            onClick={() => handleDeleteComment(_id)}
          >
            <FaTrash>제거</FaTrash>
          </span>
        )}
        {children}
      </CommentItem>
    </div>
  children,
}: CommentPropsWithChild) {
  return (
    <div className="comment__container">
      <User author={author} />
      <CommentItem comment={comment}>{children}</CommentItem>
    </div>
  )
}

function User({ author }: CommentAuthorProps) {
  return (
    <div className="comment__container__user">
      <Avatar
        size={2}
        text={author.fullName}
        src={author.image}
        textStyle={{
          width: '120px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      />
    </div>
  )
}

function CommentItem({ comment, children, createdAt }: CommentItemProps) {
  return (
    <div className="comment__container__item">
      <Text textStyle="caption1">
        {createdAt && new Date(createdAt ?? '').toLocaleString()}
        {children}
      </Text>
      <Text
        textStyle="body2"
        style={{
          marginTop: '5px',
        }}
      >
        {comment}
      </Text>
    </div>
  )
}
