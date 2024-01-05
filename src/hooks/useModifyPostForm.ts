import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { z } from 'zod'
import { notify } from '@/components/atoms/Toast'
import APP_PATH from '@/config/paths'
import { postValidation } from '@/config/postValidation'
import { putUserPost } from '@/services/post'

export type ModifyUploadFormType = z.infer<typeof modifyUploadFormSchema>

export const modifyUploadFormSchema = z.preprocess(
  (obj: any) => {
    const cleanDescription = obj.description.replace(/<[^>]*>/g, '')

    if (cleanDescription.length < 1) {
      return {
        ...obj,
        description: '',
      }
    } else {
      return obj
    }
  },
  z.object({
    title: postValidation.title(),
    description: postValidation.description(),
    image: postValidation.image(),
    postId: z.string(),
    imageSelective: z.object({
      image: z.any(),
      imageToDeletePublicId: z.string().optional(),
    }),
    mapping_ID: z.string(),
  }),
)

export const useModifyPostForm = () => {
  const { register, handleSubmit, formState, setValue } =
    useForm<ModifyUploadFormType>({
      // FIXME: zodResolver의 버전이 올라가면서 타입이 맞지 않는 문제가 있음
      // @ts-ignore
      resolver: zodResolver(modifyUploadFormSchema),
      mode: 'onChange',
    })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const onSubmit = async ({
    title,
    description,
    postId,
    imageSelective,
    mapping_ID,
  }: ModifyUploadFormType) => {
    if (isSubmitting) return
    setIsSubmitting(() => true)
    try {
      const res = await putUserPost({
        title,
        description,
        postId,
        imageSelective,
        mapping_ID,
      })
      if (res) {
        notify('success', '게시글이 성공적으로 등록되었습니다.')
        setIsSubmitting(() => false)
      }
    } catch (e) {
      notify('error', '게시글 등록에 실패했습니다.')
      setIsSubmitting(() => false)
    } finally {
      router.push(APP_PATH.postDetail(postId))
      router.refresh()
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
