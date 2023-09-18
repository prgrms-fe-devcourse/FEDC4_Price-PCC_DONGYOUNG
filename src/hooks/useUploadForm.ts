import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { notify } from '@/components/atoms/Toast'
import APP_PATH from '@/config/paths'
import { postUserPost } from '@/services/post'

interface UploadFormData {
  title: string
  description: string
  image: File
}

export const useUploadForm = () => {
  const { register, handleSubmit, formState, setValue } =
    useForm<UploadFormData>()
  const router = useRouter()

  const onSubmit = async ({ title, description, image }: UploadFormData) => {
    try {
      const res = await postUserPost({
        title: {
          title,
          description,
        },
        image,
      })

      if (res) {
        notify('success', '게시글이 성공적으로 등록되었습니다.')
        router.push(APP_PATH.home())
      }
    } catch (e) {
      notify('error', '게시글 등록에 실패했습니다.')
    }
  }

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    titleError: formState.errors.title?.message,
    descriptionError: formState.errors.description?.message,
    imageError: formState.errors.image?.message,
    setValue,
  }
}
