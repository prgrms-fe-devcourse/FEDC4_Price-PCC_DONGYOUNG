import Avatar from '@/components/atoms/Avatar'
import FollowToggleButton from '@/components/atoms/FollowToggleButton'
import useFollow from '@/hooks/useFollow'
import { useGetUserDetail } from '@/queries/users/detail'
import './index.scss'

type FollowListItemProps = {
  targetUserId: string
}

export default function FollowListItem({ targetUserId }: FollowListItemProps) {
  const { data } = useGetUserDetail(targetUserId)
  const { isFollowing, unavailable, followToggle, followerCount } =
    useFollow(data)
  return (
    <li className="follow-list-item">
      <div className="follow-list-item__avatar">
        <Avatar
          src={data?.image}
          text={data?.fullName}
          subText={`${followerCount} Followers`}
          size={4}
        />
      </div>
      <FollowToggleButton
        size="small"
        isFollowing={isFollowing}
        unavailable={unavailable}
        followToggle={followToggle}
      />
    </li>
  )
}
