import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { z } from 'zod'
import { notify } from '@/components/atoms/Toast'
import APP_PATH from '@/config/paths'
import { postValidation } from '@/config/postValidation'
import { postUserPost } from '@/services/post'

const uploadFormSchema = z.object({
  title: postValidation.title(),
  description: postValidation.description(),
  image: postValidation.image(),
})

export const useUploadForm = () => {
  const { register, handleSubmit, formState, setValue } = useForm<
    z.infer<typeof uploadFormSchema>
  >({
    // FIXME: zodResolver의 버전이 올라가면서 타입이 맞지 않는 문제가 있음
    // @ts-ignore
    resolver: zodResolver(uploadFormSchema),
    defaultValues: {
      title: '',
      description: '',
      image: undefined,
    },
    mode: 'onChange',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const onSubmit = async ({
    title,
    description,
    image,
  }: z.infer<typeof uploadFormSchema>) => {
    if (isSubmitting) return
    setIsSubmitting(() => true)
    try {
      const res = await postUserPost({
        title: {
          title,
          description,
        },
        image,
      })

      if (res) {
        router.push(APP_PATH.home())
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
    imageError: formState.errors.image?.message,
    setValue,
    formState,
  }
}
