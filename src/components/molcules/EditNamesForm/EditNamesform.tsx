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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      fullName: '',
      username: '',
    },
  })

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        if (data.fullName.length < 1) {
          notify('error', `${errors.fullName?.message}`)
        } else {
          try {
            await editProfile(data)
            notify('success', '닉네임이 수정되었습니다.')
            router.push(APP_PATH.home())
          } catch (error) {
            notify('error', '닉네임 수정에 실패했습니다.')
          }
        }
      })}
      style={{ display: 'flex', justifyContent: 'space-between' }}
    >
      <Input
        {...(register &&
          register('fullName', {
            required: '변경 할 닉네임을 작성해주세요.',
          }))}
        placeholder={fullName}
        variant="clear"
        outline="underbar"
        style={{
          width: 'auto',
          boxSizing: 'border-box',
          marginBottom: '4rem',
          padding: '10px, 5px',
          fontSize: '1.1rem',
        }}
      />
      <Button
        isShadowed={true}
        text="닉네임 변경"
        width={14.06}
        height={2.06}
        variant="default"
        rounded="rounded-md"
        type="submit"
        style={{ fontSize: '1rem' }}
      />
    </form>
  )
}

export default EditNamesform
