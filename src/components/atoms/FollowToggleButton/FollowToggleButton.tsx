import classNames from 'classnames'
import { Text } from '@/components/atoms/Text'
import useFollow from '@/hooks/useFollow'
import User from '@/types/user'
import './index.scss'

type FollowToggleButtonProps = {
  userData: User
  size: 'small' | 'large'
}

export default function FollowToggleButton({
  userData,
  size,
}: FollowToggleButtonProps) {
  const { unavailable, isFollowing, followToggle } = useFollow(userData)

  return (
    <button
      className={classNames('toggle-button', size, {
        isHide: unavailable,
        isFollowing: isFollowing,
      })}
      onClick={followToggle}
    >
      <Text
        textStyle={size === 'small' ? 'subtitle1' : 'subtitle1-bold'}
        color={isFollowing ? 'primary-4' : 'bg-1'}
      >
        {isFollowing ? '팔로잉' : '팔로우'}
      </Text>
    </button>
  )
}
