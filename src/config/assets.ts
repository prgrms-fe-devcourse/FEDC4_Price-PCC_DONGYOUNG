
import PCCImage from '/public/images/pccIImage.svg'
import UploadImage from '/public/images/uploadImage.svg'
import darkmode from '/public/images/darkmode.svg'
import lightmode from '/public/images/lightmode.svg'
import titleLogo from '/public/images/titleLogo.svg'

const Assets = {
  DARKMODE_SVG_PATH: darkmode,
  LIGHTMODE_SVG_PATH: lightmode,
  TITLELOGO_SVG_PATH: titleLogo,
  PCCImage,
  UploadImage,
} as const

export default Assets
