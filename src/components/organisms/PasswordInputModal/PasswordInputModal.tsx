import React from 'react'
import { useForm } from 'react-hook-form'
import { AiOutlineClose } from 'react-icons/ai'
import { Button } from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'
import { Text } from '@/components/atoms/Text'

type HandleModalCloseProps = {
  handleModalClose: () => void
}

const PasswordInputModal = ({ handleModalClose }: HandleModalCloseProps) => {
  const { register, handleSubmit } = useForm()

  return (
    //TODO: 비밀번호 검증 로직 구현
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data, '비밀번호 확인 로직')
      })}
      style={{ padding: '4rem 3.6rem' }}
    >
      <AiOutlineClose
        onClick={() => {
          handleModalClose()
        }}
        size={30}
        color="gray-5"
        style={{ float: 'right', cursor: 'pointer' }}
      />
      <Text
        textStyle="heading1-bold"
        color="gray-5"
        style={{ marginBottom: '10rem' }}
      >
        비밀번호 입력
      </Text>
      <Input
        {...(register &&
          register('password', {
            required: true,
          }))}
        type="password"
        placeholder="비밀번호를 입력해주세요"
        variant="clear"
        outline="underbar"
        style={{
          boxSizing: 'border-box',
          marginBottom: '2.5rem',
          padding: '20px 5px',
          fontSize: '1.1rem',
        }}
      />
      <Button
        type="submit"
        text="확인"
        variant="default"
        rounded="rounded-lg"
        width={12}
        height={3.125}
        isShadowed
        style={{ float: 'right', boxSizing: 'border-box' }}
      />
    </form>
  )
}

export default React.memo(PasswordInputModal)
