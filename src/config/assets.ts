import SearchIcon from 'public/images/searchIcon.svg'
import ArrowBottomIcon from '/public/images/arrowBottomIcon.svg'
import darkmode from '/public/images/darkmode.svg'
import DislikeImage from '/public/images/dislike.svg'
import lightmode from '/public/images/lightmode.svg'
import LikeImage from '/public/images/like.svg'
import MainLogo from '/public/images/mainLogo.svg'
import NotificationImage from '/public/images/notification.svg'
import PCCImage from '/public/images/pccIImage.svg'
import titleLogo from '/public/images/titleLogo.svg'
import UploadImage from '/public/images/uploadImage.svg'

const Assets = {
  DARKMODE_SVG_PATH: darkmode,
  LIGHTMODE_SVG_PATH: lightmode,
  TITLELOGO_SVG_PATH: titleLogo,
  PCCImage,
  UploadImage,
  SearchIcon,
  LikeImage,
  DislikeImage,
  MainLogo,
  NotificationImage,
  ArrowBottomIcon,
} as const

export default Assets
