import SearchIcon from 'public/images/searchIcon.svg'
import ActiveDisLike from '/public/images/activeDisLike.png'
import ActiveLike from '/public/images/activeLike.png'
import ArrowDarkIcon from '/public/images/arrowDarkIcon.svg'
import ArrowLightIcon from '/public/images/arrowLightIcon.svg'
import backIcon from '/public/images/backIcon.svg'
import darkmode from '/public/images/darkmode.svg'
import DislikeImage from '/public/images/dislike.svg'
import DislikeWhite from '/public/images/dislikeWhite.svg'
import lightmode from '/public/images/lightmode.svg'
import LikeImage from '/public/images/like.svg'
import LikeWhite from '/public/images/likeWhite.svg'
import MainLogo from '/public/images/mainLogo.svg'
import NotificationImage from '/public/images/notification.svg'
import OptionsIcon from '/public/images/optionsIcon.svg'
import OptionsWhite from '/public/images/optionsIconWhite.svg'
import PCCImage from '/public/images/pccIImage.svg'
import PlusIcon from '/public/images/plusIcon.svg'
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
  ArrowDarkIcon,
  ArrowLightIcon,
  backIcon,
  PlusIcon,
  OptionsIcon,
  OptionsWhite,
  LikeWhite,
  DislikeWhite,
  ActiveLike,
  ActiveDisLike,
} as const

export default Assets
