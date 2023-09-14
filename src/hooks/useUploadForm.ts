import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
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

      if (res.status === 200) {
        alert('업로드 성공')
        router.push(APP_PATH.home())
      }
    } catch (e) {
      alert(e) // TODO: toast 등 표시
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
