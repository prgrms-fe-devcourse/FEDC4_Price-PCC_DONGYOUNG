'use client'

import { useState } from 'react'
import classNames from 'classnames'
import { Text } from '@/components/atoms/Text'
import TextStyle from '@/types/textStyles'
import './index.scss'

type Size = 'micro' | 'small' | 'large'
type FollowToggleButtonProps = {
  size: Size
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
  const textStyles: Record<Size, TextStyle> = {
    micro: 'body1',
    small: 'subtitle1',
    large: 'subtitle1-bold',
  }
  const [disable, setDisable] = useState(false)

  const handleClickEvent = async () => {
    setDisable(true)
    await followToggle()
    setDisable(false)
  }

  return (
    <button
      className={classNames('toggle-button', size, {
        isHide: unavailable,
        isFollowing: isFollowing,
      })}
      disabled={disable}
      onClick={handleClickEvent}
    >
      <Text
        textStyle={textStyles[size]}
        color={isFollowing ? 'primary-4' : 'bg-1'}
      >
        {isFollowing ? '팔로잉' : '팔로우'}
      </Text>
    </button>
  )
}
