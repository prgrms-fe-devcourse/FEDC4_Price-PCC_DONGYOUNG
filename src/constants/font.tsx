import localFont from 'next/font/local'

const pretendardRegular = localFont({
  src: '../../public/fonts/Pretendard-Regular.woff2',
  display: 'swap',
})

const pretendardFont = {
  Regular: pretendardRegular,
}

export default pretendardFont
