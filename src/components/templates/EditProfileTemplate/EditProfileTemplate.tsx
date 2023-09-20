'use client'

import { useState } from 'react'
import EditProfile from '@/components/organisms/EditProfile'
import EditPassword from '../../organisms/EditPassword'
import './index.scss'

const EditProfileTemplate = () => {
  const [page, setPage] = useState<'profile' | 'password'>('profile')

  return (
    <div className="edit-profile-container">
      {page === 'profile' ? (
        <EditProfile setPage={setPage} />
      ) : (
        <EditPassword setPage={setPage} />
      )}
    </div>
  )
}

export default EditProfileTemplate
