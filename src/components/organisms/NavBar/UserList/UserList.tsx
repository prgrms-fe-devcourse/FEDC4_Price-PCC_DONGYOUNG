'use client'

import Link from 'next/link'
import Avatar from '@/components/atoms/Avatar'
import { Text } from '@/components/atoms/Text'
import APP_PATH from '@/config/paths'
import useFollow from '@/hooks/useFollow'
import { useGetAllUsers } from '@/queries/users'
import { UserSummary } from '@/types/user'

export default function UserList() {
  const { data } = useGetAllUsers()

  return (
    <>
      <div className="nav-title">
        <Text textStyle="heading1-bold">전체 사용자</Text>
        <div className="user-count color-bg--highlight">
          <Text textStyle="caption1-bold" style={{ color: '#F0F0F0' }}>
            {data?.length.toString() ?? ''}
          </Text>
        </div>
      </div>
      <ul className="avatar-list">
        {data?.map((user: UserSummary) => (
          <UserListItem key={user._id} userData={user} />
        ))}
      </ul>
    </>
  )
}

function UserListItem({ userData }: { userData: UserSummary }) {
  const { followerCount } = useFollow(userData)
  const { image, _id, fullName } = userData
  return (
    <li className="avatar-list__item">
      <div className="avatar-list__item--avatar">
        <Link href={APP_PATH.userProfile(_id)}>
          <Avatar
            src={image}
            size={3}
            text={fullName}
            subText={`${followerCount} Followers`}
          />
        </Link>
      </div>
    </li>
  )
}
