import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { AiOutlineClose } from 'react-icons/ai'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'
import { Text } from '@/components/atoms/Text'
import APP_PATH from '@/config/paths'
import { useCheckPassword } from '@/hooks/useCheckPassword'
import { useAuth } from '@/lib/contexts/authProvider'

type HandleModalCloseProps = {
  setIsAuthUser: React.Dispatch<React.SetStateAction<boolean>>
}

const PasswordInputModal = ({ setIsAuthUser }: HandleModalCloseProps) => {
  const router = useRouter()
  const [isVerifiedUser, setIsVerifiedUser] = useState(false)
  const { register, handleSubmit } = useForm()
  const { currentUser } = useAuth()
  const { checkUser } = useCheckPassword()

  return (
    <form
      onSubmit={handleSubmit(async ({ password }) => {
        const user = await checkUser({
          email: currentUser?.email!,
          password,
        })
        if (user) {
          Cookies.set('verified-user', JSON.stringify(!isVerifiedUser), {
            expires: 1 / 144,
          })
          setIsVerifiedUser(!isVerifiedUser)
          setIsAuthUser(true)
        }
      })}
      style={{ padding: '4rem 3.6rem' }}
    >
      <AiOutlineClose
        onClick={() => {
          router.push(APP_PATH.home())
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
