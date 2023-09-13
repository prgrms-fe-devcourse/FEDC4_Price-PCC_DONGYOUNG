import User from '../user'

interface Message {
  _id: string
  message: string
  sender: User
  receiver: User
  seen: boolean
  createdAt: string
  updatedAt: string
}

export default Message
