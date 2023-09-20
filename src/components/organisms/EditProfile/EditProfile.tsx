import EditNamesform from '@/components/molcules/EditNamesForm'
import EditProfileImageForm from '@/components/molcules/EditProfileImageForm'

export type SetEditProfileComponent = {
  setPage: React.Dispatch<React.SetStateAction<'profile' | 'password'>>
}

const EditProfile = ({ setPage }: SetEditProfileComponent) => {
  return (
    <div>
      <EditProfileImageForm setPage={setPage} />
      <EditNamesform />
    </div>
  )
}

export default EditProfile
