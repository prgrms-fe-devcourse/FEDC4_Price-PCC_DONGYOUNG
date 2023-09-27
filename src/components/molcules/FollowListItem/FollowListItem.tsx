import Avatar from '@/components/atoms/Avatar'
import FollowToggleButton from '@/components/atoms/FollowToggleButton'
import Loading from '@/components/atoms/Loading'
import useFollow from '@/hooks/useFollow'
import { useGetUserDetail } from '@/queries/users/detail'
import './index.scss'

type FollowListItemProps = {
  targetUserId: string
}

export default function FollowListItem({ targetUserId }: FollowListItemProps) {
  const { data, isLoading } = useGetUserDetail(targetUserId)
  const { isFollowing, unavailable, followToggle, followerCount } =
    useFollow(data)
  return (
    <>
      {isLoading ? (
        <Loading size={0.5} type="dot" />
      ) : (
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
      )}
    </>
  )
}
