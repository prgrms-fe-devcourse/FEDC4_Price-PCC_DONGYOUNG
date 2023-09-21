import React, { Dispatch, SetStateAction, useState } from 'react'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { Text } from '@/components/atoms/Text'
import Assets from '@/config/assets'
import { useDeletePost } from '@/queries/post'
import './index.scss'

type PropsType = {
  postId: string
  setIsDeleted?: Dispatch<SetStateAction<boolean>>
}

function PostOptionsDropdown({ postId, setIsDeleted }: PropsType) {
  const [isOpen, setIsOpen] = useState(false)
  const deletePostMutation = useDeletePost(postId)

  const handleDeletePost = () => {
    if (setIsDeleted) {
      setIsDeleted((prevState) => !prevState)
    }
    deletePostMutation.mutate()
  }
  return (
    <div>
      <button
        onClick={() => {
          setIsOpen((isOpen) => !isOpen)
        }}
      >
        <Image src={Assets.OptionsIcon} alt="더보기 버튼" />
      </button>
      {isOpen && (
        <div
          className={classNames('modal-dropdown-container', 'color-bg--bg-1', {
            close: !isOpen,
            options: true,
          })}
        >
          <OptimizedLink href={'#'}>
            {/*TODO - 게시글 수정 페이지 링크 */}
            <Text textStyle="body2-bold">게시글 수정</Text>
          </OptimizedLink>
          <div className="logout-button" onClick={handleDeletePost}>
            <Text textStyle="body2-bold">게시글 삭제</Text>
          </div>
        </div>
      )}
    </div>
  )
}

const OptimizedLink = React.memo(
  ({
    href,
    children,
    className,
  }: {
    href: string
    children: React.ReactNode
    className?: string
  }) => (
    <Link href={href} className={className}>
      {children}
    </Link>
  ),
)
OptimizedLink.displayName = 'OptimizedLink'

export default React.memo(PostOptionsDropdown, (prevProps, nextProps) => {
  return prevProps.postId === nextProps.postId
})
