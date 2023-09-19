'use client'

import { useLayoutEffect } from 'react'
import { Button } from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'
import Quill from '@/components/atoms/Quill'
import FilePicker from '@/components/molcules/file-picker'
import { useModifyPostForm } from '@/hooks/useModifyPostForm'
import Post from '@/types/post'
import './index.scss'

type ModifyPostPageTemplateProps = {
  postData: Post
}

export default function ModifyPostPageTemplate({
  postData,
}: ModifyPostPageTemplateProps) {
  const { register, onSubmit, titleError, setValue } = useModifyPostForm()

  useLayoutEffect(() => {
    console.log(postData, 'postData')
    setValue('postId', postData._id)
    setValue('title', postData.title)
    setValue('description', postData.description)
    setValue('imageSelective', {
      image: postData.image,
      imageToDeletePublicId: postData.imagePublicId,
    })
  }, [postData, setValue])

  return (
    <form className="upload-page" onSubmit={onSubmit}>
      <Input
        type="text"
        placeholder="제목을 입력해주세요"
        variant={titleError ? 'error' : 'clear'}
        outline="underbar"
        style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
        }}
        {...register('title', {
          required: '제목을 입력해주세요',
        })}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault()
          }
        }}
      />
      <Quill
        defaultValue={postData.description}
        onEdit={(text) => {
          setValue('description', text)
        }}
      />
      <div className="file-picker-container">
        <FilePicker
          width={20}
          height={10}
          defaultValue={postData.image}
          onChange={(file) => {
            setValue('imageSelective', {
              image: file[0],
              imageToDeletePublicId: undefined,
            })
          }}
        />
      </div>
      <div className="submit-button-container">
        <Button
          text="완료"
          variant="default"
          isShadowed={true}
          rounded="rounded-md"
          width={12}
          height={3}
          type="submit"
        />
      </div>
    </form>
  )
}
