import { useForm } from 'react-hook-form'
import { Button } from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'
import { notify } from '@/components/atoms/Toast'
import { useValidate } from '@/hooks/useCurrentUser'
import { useEditProfile } from '@/hooks/useEditUserProfile'
import useGetAllUsers from '@/queries/users'

interface FormValues {
  fullName: string
  username: string
}

export type NameProps = {
  fullName: string
}

const EditNamesform = ({ fullName }: NameProps) => {
  const validate = useValidate()
  const getAllUsers = useGetAllUsers()
  const { editProfile } = useEditProfile()

  const { register, handleSubmit, setValue } = useForm<FormValues>({
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
          notify('success', '닉네임이 수정되었습니다.')
          validate.refetch()
          getAllUsers.refetch()
          setValue('fullName', '')
        } catch (error) {
          notify('error', '닉네임 수정에 실패했습니다.')
        }
      })}
      style={{ display: 'flex', justifyContent: 'space-between' }}
    >
      <Input
        {...(register &&
          register('fullName', {
            required: true,
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
