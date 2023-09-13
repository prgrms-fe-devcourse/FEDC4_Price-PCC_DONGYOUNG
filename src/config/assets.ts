import darkmode from '/public/images/darkmode.svg'
import DislikeImage from '/public/images/dislike.svg'
import lightmode from '/public/images/lightmode.svg'
import titleLogo from '/public/images/titleLogo.svg'
import LikeImage from '/public/images/like.svg'
import PCCImage from '/public/images/pccIImage.svg'
import UploadImage from '/public/images/uploadImage.svg'

const Assets = {
  DARKMODE_SVG_PATH: darkmode,
  LIGHTMODE_SVG_PATH: lightmode,
  TITLELOGO_SVG_PATH: titleLogo,
  PCCImage,
  UploadImage,
  LikeImage,
  DislikeImage,
} as const

export default Assets
