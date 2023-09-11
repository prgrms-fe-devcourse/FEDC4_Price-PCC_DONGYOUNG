'use client'

type CommentProps = {
  _id: string
  comment: string
  createAt?: string
  updatedAt?: string
  author: {
    fullName: string
  }
}

export default function Comment({ _id }: CommentProps) {
  return <div className="comment"></div>
}
