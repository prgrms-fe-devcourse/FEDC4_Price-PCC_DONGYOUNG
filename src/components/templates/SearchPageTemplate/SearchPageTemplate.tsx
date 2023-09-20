'use client'

import { useState } from 'react'
import { Text } from '@/components/atoms/Text'
import Post from '@/types/post'
import User from '@/types/user'
import './index.scss'

type dataType = {
  data: Post[] | User[]
}

export default function SearchPageTemplate({ data }: dataType) {
  const user: User[] = []
  const post: Post[] = []
  const [postClick, setPostClick] = useState(true)
  const [userClick, setUserClick] = useState(false)

  const handleClick = (category: string) => {
    if (category === 'post') {
      setPostClick(true)
      setUserClick(false)
    } else {
      setPostClick(false)
      setUserClick(true)
    }
  }

  const isUser = (target: User | Post): target is User => {
    return (target as User).fullName !== undefined
  }

  data.forEach((value: User | Post) => {
    isUser(value) ? user.push(value) : post.push(value)
  })

  return (
    <div className="container">
      <div className="search-page-headline">
        <div className="button-container color-bg--bg-1">
          <CategoryButton
            title="게시글"
            count={post.length}
            isClick={postClick}
            onClick={() => handleClick('post')}
          />
          <CategoryButton
            title="사용자"
            count={user.length}
            isClick={userClick}
            onClick={() => handleClick('user')}
          />
        </div>
      </div>
    </div>
  )
}

const CategoryButton = ({
  title,
  count,
  isClick,
  onClick,
}: {
  title: string
  count: number
  isClick: boolean
  onClick: () => void
}) => (
  <button
    className={`category-button title-${title} click-${isClick}`}
    onClick={onClick}
  >
    <Text textStyle="subtitle1-bold" color="gray-2" className="category-text">
      {title}
    </Text>
    <Text textStyle="subtitle1-bold" color="gray-2" className="category-text">
      ({count})
    </Text>
  </button>
)
