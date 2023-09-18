import {
  FaInfo,
  FaCheck,
  FaExclamationTriangle,
  FaBug,
  FaExclamationCircle,
} from 'react-icons/fa'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './index.scss'

export const displayIcon = (type: string) => {
  switch (type) {
    case 'info':
      return <FaInfo />
    case 'success':
      return <FaCheck />
    case 'warning':
      return <FaExclamationTriangle />
    case 'error':
      return <FaBug />
    default:
      return <FaExclamationCircle />
  }
}

const Toast = ({ type, message }: { type: string; message: string }) => {
  return (
    <div className="toast">
      <div className="toast-icon">{displayIcon(type)}</div>
      <div className="toast-message">{message}</div>
    </div>
  )
}

export const notify = (type: string, message: string) => {
  toast(<Toast type={type} message={message} />)
}
