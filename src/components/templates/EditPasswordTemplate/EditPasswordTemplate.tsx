'use client'

import { useForm } from 'react-hook-form'
import { Button } from '@/components/atoms/Button'
import { Text } from '@/components/atoms/Text'
import ValidInput from '@/components/molcules/ValidInput'
import './index.scss'

interface FormValues {
  password: string
  passwordCheck: string
}

const EditPasswordTemplate = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      password: '',
      passwordCheck: '',
    },
  })

  return (
    //TODO: 비밀번호 변경 api 로직 연결
    <form
      className="edit-password-container"
      onSubmit={handleSubmit((data) => {
        console.log(data, '비밀번호 변경 api 호출')
      })}
    >
      <Text
        textStyle="heading0-bold"
        style={{
          width: '100%',
          textAlign: 'center',
          marginBottom: '6rem',
        }}
      >
        비밀번호 변경하기
      </Text>
      <ValidInput
        {...(register &&
          register('password', {
            required: '비밀번호를 확인 해주세요',
            minLength: {
              value: 8,
              message: '비밀번호는 8글자 이상이어야 합니다',
            },
            maxLength: {
              value: 16,
              message: '비밀번호는 16글자 이하여야 합니다',
            },
            pattern: {
              value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
              message: '비밀번호는 숫자, 대문자, 소문자를 모두 포함해야 합니다',
            },
          }))}
        errorMessage={errors.password?.message}
        type="password"
        placeholder="변경할 비밀번호"
        variant="clear"
        outline="underbar"
      />
      <ValidInput
        {...(register &&
          register('passwordCheck', {
            required: '비밀번호를 확인 해주세요',
            validate: {
              matchPassword: (value) => {
                const { password } = getValues()
                return password === value || '비밀번호가 일치하지 않습니다'
              },
            },
          }))}
        errorMessage={errors.passwordCheck?.message}
        type="password"
        placeholder="비밀번호 확인"
        variant="clear"
        outline="underbar"
        style={{ marginBottom: '10rem' }}
      />
      <Button
        type="submit"
        text="수정 완료"
        height={3.6875}
        variant="default"
        rounded="rounded-lg"
        style={{ width: '100%' }}
      />
    </form>
  )
}

export default EditPasswordTemplate
