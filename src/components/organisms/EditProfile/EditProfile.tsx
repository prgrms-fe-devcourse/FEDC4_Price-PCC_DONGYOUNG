import React, { useMemo } from 'react'
import { Text } from '@/components/atoms/Text'
import EditNamesform from '@/components/molcules/EditNamesForm'
import EditProfileImageForm from '@/components/molcules/EditProfileImageForm'
import { useCurrentUser } from '@/hooks/useCurrentUser'

export type SetEditProfileComponent = {
  setPage: React.Dispatch<React.SetStateAction<'profile' | 'password'>>
}

const EditProfile = ({ setPage }: SetEditProfileComponent) => {
  const { currentUser } = useCurrentUser()

  const cachedCurrentUser = useMemo(() => currentUser, [currentUser])

  return (
    <div>
      <Text
        textStyle="heading0-bold"
        style={{
          width: '100%',
          textAlign: 'center',
          marginBottom: '3rem',
        }}
      >
        내 정보 변경하기
      </Text>
      <EditProfileImageForm
        setPage={setPage}
        image={cachedCurrentUser ? cachedCurrentUser.image : undefined}
      />
      <EditNamesform
        fullName={cachedCurrentUser ? cachedCurrentUser.fullName : ''}
      />
    </div>
  )
}

export default React.memo(EditProfile)
