import { useRef, useCallback, ChangeEvent, useState } from 'react'
import { Button } from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'
import { notify } from '@/components/atoms/Toast'
import { Comment as CommentItem } from '@/components/molcules/Comment'
import useGetComment from '@/queries/comments'
import Comment from '@/types/comment'
import './index.scss'

type CommentInputProps = Pick<Comment, 'author'> & {
  onChangeInput?: (_input: string) => Promise<void>
  onSubmit?: (_input: string) => Promise<void>
  postId?: string
}

export default function CommentInput({
  author,
  onChangeInput,
  onSubmit,
  postId,
}: CommentInputProps) {
  const { refetch } = useGetComment(postId ?? '')
  const [inputValue, setInputValue] = useState<string>('')
  const commentInputRef = useRef<HTMLInputElement | null>(null)

  const handleOnChangeComment = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value
      setInputValue(inputValue)
      if (onChangeInput) onChangeInput(inputValue)
    },
    [onChangeInput],
  )

  const handleOnClickBtn = async () => {
    const trimmedInput = inputValue.trim()
    if (onSubmit && trimmedInput.length > 1) {
      try {
        await onSubmit(trimmedInput)
        if (commentInputRef.current) {
          commentInputRef.current.value = ''
        }
        notify('info', '댓글이 등록되었습니다.')
        setInputValue('')
        refetch()
      } catch (error) {
        notify('error', '서버에서 호출에 실패하였습니다.')
      }
    }
  }

  return (
    <div className="comment--input__container">
      <CommentItem author={author} comment={''} _id="">
        <div className="comment--input--wrapper">
          <Input
            placeholder="댓글을 입력하세요"
            variant="default"
            style={inputStyles}
            ref={commentInputRef}
            className="comment--input"
            outline="none"
            value={inputValue}
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
  )
}

const inputStyles = {
  borderBottom: '1px solid',
  outline: '0',
  fontSize: '1rem',
  padding: '7px 0',
  background: 'transparent',
}
