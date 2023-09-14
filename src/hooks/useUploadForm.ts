import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import APP_PATH from '@/config/paths'
import { apiClient } from '@/lib/axios'

interface UploadFormData {
  title: string
  description: string
  image: string | BinaryData | null
}

export const useUploadForm = () => {
  const { register, handleSubmit, formState, setValue } =
    useForm<UploadFormData>()
  const router = useRouter()

  const onSubmit = async ({ title, description, image }: UploadFormData) => {
    try {
      const res = await apiClient.post('/api/posts/create', {
        title: {
          title,
          description,
        },
        image,
      })
      // TODO: 이미지 base64로 변환해서 전송
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
