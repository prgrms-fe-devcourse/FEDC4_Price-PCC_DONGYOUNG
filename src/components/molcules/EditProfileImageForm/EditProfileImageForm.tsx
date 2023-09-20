import { useRef, useState, ChangeEvent } from 'react'
import Image from 'next/image'
import { Button } from '@/components/atoms/Button'
import { SetEditProfileComponent } from '@/components/organisms/EditProfile/EditProfile'
import Assets from '@/config/assets'
import { useEditProfileImage } from '@/hooks/useEditUserImage'
import './index.scss'

type EditProfileImageFormProps = SetEditProfileComponent & {
  image: string | undefined
}

const EditProfileImageForm = ({
  setPage,
  image,
}: EditProfileImageFormProps) => {
  const { editProfileImage } = useEditProfileImage()
  const [profile, setProfile] = useState<File | null>(null)
  const selectProfileFile = useRef<HTMLInputElement | null>(null)

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    if (e.target.files) {
      setProfile(e.target.files[0])
    }
  }

  return (
    <div className="edit-profile-image-form">
      <input
        type="file"
        style={{ display: 'none' }}
        ref={selectProfileFile}
        onChange={handleFileChange}
      />
      <Image
        onClick={() => selectProfileFile?.current?.click()}
        src={image || Assets.PCCImage}
        width={180}
        height={180}
        style={{ borderRadius: '50%' }}
        alt="profile-image"
      />
      <div className="edit-profile-image-form__buttons">
        <Button
          onClick={async () => {
            await editProfileImage({
              isCover: false,
              image: profile!,
            })
            setProfile(null)
          }}
          isShadowed={true}
          text="프로필 이미지 변경"
          width={14.06}
          height={2.06}
          variant="default"
          rounded="rounded-md"
          style={{ fontSize: '1rem', marginBottom: '1.8rem' }}
        />
        <Button
          onClick={() => setPage('password')}
          isShadowed={true}
          text="비밀번호 변경하러 가기"
          width={14.06}
          height={2.06}
          variant="default"
          rounded="rounded-md"
          style={{ fontSize: '1rem' }}
        />
      </div>
    </div>
  )
}

export default EditProfileImageForm
