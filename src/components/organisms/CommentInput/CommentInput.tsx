'use client'

import { useRef, useEffect, useCallback, ChangeEvent, useState } from 'react'
import { Button } from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'
import { Comment as CommentItem } from '@/components/molcules/Comment'
import Comment from '@/types/comment'
import './index.scss'

type CommentInputProps = Pick<Comment, 'author'> & {
  onChangeInput?: (_input: string) => void
  onSubmit?: (_input: string) => void
}

export default function CommentInput({
  author,
  onChangeInput,
  onSubmit,
}: CommentInputProps) {
  const [_input, setInput] = useState<string>('')
  const commentInputRef = useRef<HTMLInputElement | null>(null)
  useEffect(() => {
    if (commentInputRef && commentInputRef.current) {
      commentInputRef.current.focus()
    }
  }, [commentInputRef])

  const handleOnChangeComment = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (onChangeInput) onChangeInput(event.target.value)
      setInput(event.target.value)
    },
    [onChangeInput],
  )

  const handleOnClickBtn = useCallback(() => {
    if (onSubmit) onSubmit(_input)
  }, [_input, onSubmit])
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
              type="button"
              onClick={handleOnClickBtn}
            />
          </div>
        </CommentItem>
      </div>
    </>
  )
}
