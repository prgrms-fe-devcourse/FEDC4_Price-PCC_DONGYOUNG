import Comment from '../comment'
import User from '../user'

interface Notification {
  seen: boolean
  _id: string
  author?: User
  user: User
  post?: string | null
  follow?: string
  comment?: Comment
  message?: string
  createdAt?: string
  updatedAt?: string
}

export default Notification
