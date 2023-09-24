'use client'

import { useRef, useCallback, ChangeEvent, useState } from 'react'
import { Button } from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'
import { notify } from '@/components/atoms/Toast'
import { Comment as CommentItem } from '@/components/molcules/Comment'
import useGetComment from '@/queries/comments'
import Comment from '@/types/comment'
import './index.scss'

type CommentInputProps = Pick<Comment, 'author'> & {
  onChangeInput?: (_input: string) => void
  onSubmit?: (_input: string) => void
  postId?: string
}

export default function CommentInput({
  author,
  onChangeInput,
  onSubmit,
  postId,
}: CommentInputProps) {
  const { refetch } = useGetComment(postId ?? '')
  const [_input, setInput] = useState<string>('')
  const commentInputRef = useRef<HTMLInputElement | null>(null)

  const handleOnChangeComment = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (onChangeInput) onChangeInput(event.target.value)
      setInput(event.target.value)
    },
    [onChangeInput],
  )

  const handleOnClickBtn = () => {
    if (onSubmit && _input.trim().length > 1) {
      try {
        onSubmit(_input)
        setInput('')
        refetch()
      } catch (error) {
        notify('error', '서버에서 호출에 실패하였습니다.')
      }
    }
  }

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
              value={_input}
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
