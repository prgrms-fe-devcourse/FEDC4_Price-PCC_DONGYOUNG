'use client'

import { useRef, useEffect, useCallback, ChangeEvent } from 'react'
import { Button } from '@/components/atoms/Button'
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
          <div className="comment--input--wrapper">
            <Input
              variant="default"
              style={{
                height: '48px',
              }}
              ref={commentInputRef}
              className="comment--input"
              outline="underbar"
              onChange={handleOnChangeComment}
            />
            <Button
              text="작성"
              variant="default"
              width={5}
              height={3}
              isShadowed={true}
              type="submit"
            />
          </div>
        </CommentItem>
      </div>
    </>
  )
}
