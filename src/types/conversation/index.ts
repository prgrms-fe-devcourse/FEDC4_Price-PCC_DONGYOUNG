import User from '../user'

interface Conversation {
  _id: string[]
  message: string
  sender: User
  receiver: User
  seen: boolean
  createdAt: string
}

export default Conversation
