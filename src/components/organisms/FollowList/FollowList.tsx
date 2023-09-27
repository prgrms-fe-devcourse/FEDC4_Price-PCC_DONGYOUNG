import { Text } from '@/components/atoms/Text'
import FollowListItem from '@/components/molcules/FollowListItem'
import User from '@/types/user'
import './index.scss'

type FollowListProps = {
  isFollowerList: boolean
  userData: User
}

export default function FollowList({
  isFollowerList,
  userData,
}: FollowListProps) {
  const users = isFollowerList ? userData.followers : userData.following
  return (
    <div className="follow-list-container">
      <Text textStyle="heading1-bold" color="gray-5">
        {isFollowerList ? '팔로워' : '팔로잉'}
      </Text>
      <ul className="follow-list">
        {users?.length === 0 ? (
          <div className="follow-list__message">
            <Text textStyle="heading2" color="gray-4">{`${
              isFollowerList ? '팔로워가' : '팔로우하는 유저가'
            } 없습니다.`}</Text>
          </div>
        ) : (
          users?.map(({ _id, user, follower }, index) => {
            const targetUserId = isFollowerList ? follower : user
            return (
              <div key={_id + index}>
                <FollowListItem targetUserId={targetUserId} />
              </div>
            )
          })
        )}
      </ul>
    </div>
  )
}
