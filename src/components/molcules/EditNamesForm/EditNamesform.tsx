import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'
import { notify } from '@/components/atoms/Toast'
import APP_PATH from '@/config/paths'
import { useEditProfile } from '@/hooks/useEditUserProfile'

interface FormValues {
  fullName: string
  username: string
}

export type NameProps = {
  fullName: string
}

const EditNamesform = ({ fullName }: NameProps) => {
  const router = useRouter()
  const { editProfile } = useEditProfile()

  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      fullName: '',
      username: '',
    },
  })

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        try {
          await editProfile(data)
          notify('success', '정보가 수정되었습니다.')
          router.push(APP_PATH.home())
        } catch (error) {
          notify('error', '정보 수정에 실패했습니다.')
        }
      })}
    >
      <Input
        {...(register &&
          register('fullName', {
            required: true,
          }))}
        placeholder={fullName}
        variant="clear"
        outline="underbar"
        style={{ boxSizing: 'border-box', marginBottom: '4rem' }}
      />
      <Button
        isShadowed={true}
        text="수정 완료"
        height={3.6875}
        variant="default"
        rounded="rounded-lg"
        type="submit"
        style={{ width: '100%' }}
      />
    </form>
  )
}

export default EditNamesform
