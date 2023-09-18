import EditNamesform from '@/components/molcules/EditNamesForm'
import EditProfileImageForm from '@/components/molcules/EditProfileImageForm'
import './index.scss'

const EditProfile = () => {
  return (
    <div className="edit-profile-container">
      <EditProfileImageForm />
      <EditNamesform />
    </div>
  )
}

export default EditProfile
