'use client'

import { useLayoutEffect, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'
import Quill from '@/components/atoms/Quill'
import { notify } from '@/components/atoms/Toast'
import FilePicker from '@/components/molcules/file-picker'
import APP_PATH from '@/config/paths'
import { useCurrentUser } from '@/hooks/useCurrentUser'
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
  const { currentUser } = useCurrentUser()
  const router = useRouter()

  useLayoutEffect(() => {
    setValue('postId', postData._id)
    setValue('title', postData.title)
    setValue('description', postData.description)
    setValue('imageSelective', {
      image: postData.image,
      imageToDeletePublicId: postData.imagePublicId,
    })
  }, [postData, setValue])

  useEffect(() => {
    if (currentUser && postData.author._id !== currentUser?._id) {
      router.push(APP_PATH.postDetail(postData._id))
      notify('warning', '올바르지 않은 접근입니다.')
    }
  }, [currentUser, postData, router])

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
              image: file?.[0] ?? null,
              imageToDeletePublicId: postData.imagePublicId,
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
