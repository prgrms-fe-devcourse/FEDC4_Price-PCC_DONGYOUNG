import { Comment as CommentComponent } from '@/components/molcules/Comment'
// Alias as CommentComponent
import Comment from '@/types/comment'
import './index.scss'

export default function CommentList({ comments }: { comments: Comment[] }) {
  return (
    <div className="comment--list">
      {comments?.map(({ _id, createdAt, author, comment }) => (
        <CommentComponent
          key={_id}
          _id={_id}
          author={author}
          comment={comment}
          createdAt={createdAt}
        />
      ))}
    </div>
  )
}
