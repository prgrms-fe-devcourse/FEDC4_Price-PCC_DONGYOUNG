import { Comment as CommentComponent } from '@/components/molcules/Comment'
// Alias as CommentComponent
import Comment from '@/types/comment'
import './index.scss'

interface CommentWithValidate extends Comment {
  isValidUser: boolean
}

export default function CommentList({
  comments,
  onDeleteComment,
}: {
  comments: CommentWithValidate[]
  onDeleteComment: (_commentId: string) => void
}) {
  return (
    <div className="comment--list">
      {comments?.map(({ _id, isValidUser, createdAt, author, comment }) => (
        <CommentComponent
          isValid={isValidUser}
          key={_id}
          _id={_id}
          author={author}
          comment={comment}
          createdAt={createdAt}
          onDeleteComment={onDeleteComment}
        />
      ))}
    </div>
  )
}
