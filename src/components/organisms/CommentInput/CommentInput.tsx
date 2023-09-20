'use client'

import { useRef, useEffect, useCallback, ChangeEvent } from 'react'
import Input from '@/components/atoms/Input'
import { Comment as CommentItem } from '@/components/molcules/Comment'
import Comment from '@/types/comment'
import './index.scss'

type CommentInputProps = Pick<Comment, 'author'> & {
  onChangeInput?: (_input: string) => void
}

export default function CommentInput({
  author,
  onChangeInput,
}: CommentInputProps) {
  const commentInputRef = useRef<HTMLInputElement | null>(null)
  useEffect(() => {
    if (commentInputRef && commentInputRef.current) {
      commentInputRef.current.focus()
    }
  }, [commentInputRef])

  const handleOnChangeComment = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (onChangeInput) onChangeInput(event.target.value)
    },
    [onChangeInput],
  )
  return (
    <>
      <div className="comment--input__container">
        <CommentItem author={author} comment={''} _id="">
          <Input
            ref={commentInputRef}
            className="comment--input"
            outline="none"
            onChange={handleOnChangeComment}
          />
        </CommentItem>
      </div>
    </>
  )
}
