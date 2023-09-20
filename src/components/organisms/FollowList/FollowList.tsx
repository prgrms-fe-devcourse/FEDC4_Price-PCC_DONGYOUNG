import Avatar from '@/components/atoms/Avatar'
import { useGetUserDetail } from '@/queries/users/detail'
import User from '@/types/user'

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
    <div>
      <ul>
        {users?.map(({ _id, user, follower }) => {
          const targetUserId = isFollowerList ? follower : user
          return <FolllowListItem key={_id} targetUserId={targetUserId} />
        })}
      </ul>
    </div>
  )
}

function FolllowListItem({ targetUserId }: { targetUserId: string }) {
  const { data } = useGetUserDetail(targetUserId)
  return (
    <li>
      <Avatar
        src={data?.image}
        text={data?.fullName}
        subText={`팔로워 ${data?.followers?.length}명`}
        size={4}
      />
    </li>
  )
}
