import { useRef, useState, ChangeEvent, useEffect } from 'react'
import { FiSettings } from 'react-icons/fi'
import Image from 'next/image'
import { Button } from '@/components/atoms/Button'
import { notify } from '@/components/atoms/Toast'
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
  const [thumnail, setThumnail] = useState(image)

  useEffect(() => {
    setThumnail(image)
  }, [image])

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    if (e.target.files) {
      const blob = new Blob([e.target.files[0]], {
        type: e.target.files[0].type,
      })

      const thumbNailImage = URL.createObjectURL(blob)
      setThumnail(thumbNailImage)
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
      <div
        className="edit-profile-image-form__image-file"
        onClick={() => selectProfileFile?.current?.click()}
      >
        <Image
          src={thumnail ?? Assets.PCCImage}
          width={180}
          height={180}
          style={{ borderRadius: '50%' }}
          alt="profile-image"
        />
        <FiSettings
          size={30}
          color="gray-5"
          style={{ position: 'absolute', right: '0px', bottom: '0px' }}
        />
      </div>
      <div className="edit-profile-image-form__buttons">
        <Button
          onClick={async () => {
            if (!profile) {
              notify('error', '이미지 파일을 선택 해주세요.')
            } else {
              await editProfileImage({
                isCover: false,
                image: profile!,
              })
              setProfile(null)
              location.reload()
            }
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
