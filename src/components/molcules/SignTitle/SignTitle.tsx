'use client'

import Image from 'next/image'
import Assets from '@/config/assets'
import './index.scss'

interface SignTitleProps {
  text?: string
}

const SignTitle = ({ text }: SignTitleProps) => {
  return (
    <>
      <div className="sign-title">
        <Image
          src={Assets.TITLELOGO_SVG_PATH}
          width={50}
          height={50}
          alt="titleLogo"
        />
        {text}
      </div>
    </>
  )
}

export default SignTitle
