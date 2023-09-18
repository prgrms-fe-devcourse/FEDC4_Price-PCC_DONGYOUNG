import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'
import APP_PATH from '@/config/paths'
import './index.scss'

const EditProfileImageForm = () => {
  const router = useRouter()

  const { register, handleSubmit } = useForm()

  return (
    //TODO: 기존 프로필 이미지 불러오기 및 프로필 이미지 update 로직 연결
    <form
      className="edit-profile-image-form"
      onSubmit={handleSubmit((data) => {
        console.log(data, '프로필 이미지 변경 api 호출')
      })}
    >
      <Input
        {...(register &&
          register('profile-image', {
            required: true,
          }))}
        type="file"
        variant="clear"
        outline="none"
      />
      <div className="edit-profile-image-form__buttons">
        <Button
          type="submit"
          isShadowed={true}
          text="프로필 이미지 변경"
          width={14.06}
          height={2.06}
          variant="default"
          rounded="rounded-md"
          style={{ fontSize: '1rem', marginBottom: '1.8rem' }}
        />
        <Button
          onClick={() => {
            router.push(APP_PATH.editPassword())
          }}
          isShadowed={true}
          text="비밀번호 변경하러 가기"
          width={14.06}
          height={2.06}
          variant="default"
          rounded="rounded-md"
          style={{ fontSize: '1rem', marginBottom: '1.8rem' }}
        />
      </div>
    </form>
  )
}

export default EditProfileImageForm
