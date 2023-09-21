import { Comment as CommentComponent } from '@/components/molcules/Comment'
// Alias as CommentComponent
import Comment from '@/types/comment'
import './index.scss'

export default function CommentList({
  comments,
  onDeleteComment,
}: {
  comments: Comment[]
  onDeleteComment: (_commentId: string) => void
}) {
  return (
    <div className="comment--list">
      {comments?.map(({ _id, createdAt, author, comment }) => (
        <CommentComponent
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
