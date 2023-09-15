'use client'

import { useRouter } from 'next/navigation'
import Avatar from '@/components/atoms/Avatar'
import ImageButton from '@/components/atoms/ImageButton'
import { Text } from '@/components/atoms/Text'
import Assets from '@/config/assets'
import APP_PATH from '@/config/paths'
import useGetAllUsers from '@/queries/users'
import './index.scss'

export default function NavBar() {
  const router = useRouter()
  const { data } = useGetAllUsers()

  return (
    <div className="nav-container color-bg--bg-1">
      <ImageButton
        src={Assets.MainLogo}
        onClick={() => router.push(APP_PATH.home())}
        shape="square"
      />
      <div className="nav-title">
        <Text textStyle="heading1-bold">전체 사용자</Text>
        <div className="user-count color-bg--highlight">
          <Text textStyle="caption1-bold" color="bg-2">
            {dummyData.length.toString()}
          </Text>
        </div>
      </div>
      <div className="avatar-list-container">
        {data?.map(({ image, followers, _id, fullName }) => (
          <div key={_id} onClick={() => router.push(APP_PATH.userProfile(_id))}>
            <Avatar
              src={image}
              size={4}
              text={fullName}
              subText={`${followers.length} Followers`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export const dummyData = [
  {
    image: Assets.PCCImage,
    followers: [],
    _id: 'testId',
    fullName: '포청천',
  },
  {
    image: Assets.PCCImage,
    followers: [],
    _id: 'testId',
    fullName: '포청천',
  },
  {
    image: Assets.PCCImage,
    followers: [],
    _id: 'testId',
    fullName: '포청천',
  },
  {
    image: Assets.PCCImage,
    followers: [],
    _id: 'testId',
    fullName: '포청천',
  },
]
