import { useForm } from 'react-hook-form'
import { Button } from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'

interface FormValues {
  name: string
  nickName: string
}

const EditNamesform = () => {
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      name: '',
      nickName: '',
    },
  })

  return (
    //TODO: 기존 이름, 닉네임 불러오기 및 이름, 닉네임 update 로직 연결
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data, '이름, 닉네임 update api 호출')
      })}
    >
      <Input
        {...(register &&
          register('name', {
            required: true,
          }))}
        variant="clear"
        outline="underbar"
        style={{ boxSizing: 'border-box', marginBottom: '1.5rem' }}
      />
      <Input
        {...(register &&
          register('nickName', {
            required: true,
          }))}
        variant="clear"
        outline="underbar"
        style={{ boxSizing: 'border-box', marginBottom: '5.5rem' }}
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
