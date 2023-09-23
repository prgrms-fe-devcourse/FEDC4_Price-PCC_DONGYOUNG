import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { notify } from '@/components/atoms/Toast'
import APP_PATH from '@/config/paths'
import { putUserPost } from '@/services/post'

export interface ModifyFormData {
  title: string
  description: string
  postId: string
  imageSelective: {
    image: File | string | null | undefined
    imageToDeletePublicId: string | undefined
  }
}

export const useModifyPostForm = () => {
  const { register, handleSubmit, formState, setValue } =
    useForm<ModifyFormData>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const onSubmit = async ({
    title,
    description,
    postId,
    imageSelective,
  }: ModifyFormData) => {
    if (isSubmitting) return
    setIsSubmitting(() => true)
    try {
      const res = await putUserPost({
        title,
        description,
        postId,
        imageSelective,
      })

      if (res) {
        router.push(APP_PATH.postDetail(postId))
        notify('success', '게시글이 성공적으로 등록되었습니다.')
        setIsSubmitting(() => false)
      }
    } catch (e) {
      notify('error', '게시글 등록에 실패했습니다.')
      setIsSubmitting(() => false)
    }
  }

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    titleError: formState.errors.title?.message,
    descriptionError: formState.errors.description?.message,
    imageError: formState.errors.imageSelective?.message,
    setValue,
    formState,
  }
}
