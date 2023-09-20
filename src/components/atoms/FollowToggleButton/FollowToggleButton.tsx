import classNames from 'classnames'
import { Text } from '@/components/atoms/Text'
import './index.scss'

type FollowToggleButtonProps = {
  size: 'small' | 'large'
  followToggle: () => Promise<void>
  unavailable: boolean
  isFollowing: boolean
}

export default function FollowToggleButton({
  size,
  followToggle,
  unavailable,
  isFollowing,
}: FollowToggleButtonProps) {
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
