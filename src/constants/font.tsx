import localFont from 'next/font/local'

const pretendardBlack = localFont({
  src: '../../public/fonts/Pretendard-Black.woff2',
  display: 'swap',
})

const pretendardBold = localFont({
  src: '../../public/fonts/Pretendard-Bold.woff2',
  display: 'swap',
})

const pretendardExtraBold = localFont({
  src: '../../public/fonts/Pretendard-ExtraBold.woff2',
  display: 'swap',
})

const pretendardExtraLight = localFont({
  src: '../../public/fonts/Pretendard-ExtraLight.woff2',
  display: 'swap',
})

const pretendardLight = localFont({
  src: '../../public/fonts/Pretendard-Light.woff2',
  display: 'swap',
})

const pretendardMedium = localFont({
  src: '../../public/fonts/Pretendard-Medium.woff2',
  display: 'swap',
})

const pretendardRegular = localFont({
  src: '../../public/fonts/Pretendard-Regular.woff2',
  display: 'swap',
})

const pretendardSemiBold = localFont({
  src: '../../public/fonts/Pretendard-SemiBold.woff2',
  display: 'swap',
})

const pretendardThin = localFont({
  src: '../../public/fonts/Pretendard-Thin.woff2',
  display: 'swap',
})

const pretendardFont = {
  Black: pretendardBlack,
  Bold: pretendardBold,
  ExtraBold: pretendardExtraBold,
  ExtraLight: pretendardExtraLight,
  Light: pretendardLight,
  Medium: pretendardMedium,
  Regular: pretendardRegular,
  SemiBold: pretendardSemiBold,
  Thin: pretendardThin,
}

export default pretendardFont
