'use client'

import { useLayoutEffect, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'
import Quill from '@/components/atoms/Quill'
import { notify } from '@/components/atoms/Toast'
import FilePicker from '@/components/molcules/file-picker'
import APP_PATH from '@/config/paths'
import { useModifyPostForm } from '@/hooks/useModifyPostForm'
import { useAuth } from '@/lib/contexts/authProvider'
import Post from '@/types/post'
import './index.scss'

type ModifyPostPageTemplateProps = {
  postData: Post
}

export default function ModifyPostPageTemplate({
  postData,
}: ModifyPostPageTemplateProps) {
  const {
    register,
    onSubmit,
    titleError,
    descriptionError,
    setValue,
    formState,
  } = useModifyPostForm()
  const { currentUser } = useAuth()
  const router = useRouter()

  useLayoutEffect(() => {
    setValue('postId', postData._id)
    setValue('title', postData.title)
    setValue('description', postData.description)
    setValue('imageSelective', {
      image: postData.image,
      imageToDeletePublicId: postData.imagePublicId,
    })
    setValue('mapping_ID', postData.mapping_ID ?? '')
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
      <span className="form-error-message">{titleError}</span>
      <Quill
        defaultValue={postData.description}
        onEdit={(text) => {
          setValue('description', text)
        }}
      />
      <span className="form-error-message">{descriptionError}</span>
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
          variant={formState.isSubmitting ? 'disabled' : 'default'}
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
