import Image from 'next/image'
import './index.scss'

type ImageButtonProps = {
  shape?: 'rounded' | 'circle' | 'square'
  size?: number
  src: string
  alt?: string
  onClick: () => void
}

export default function ImageButton({
  shape = 'circle',
  size = 5,
  src,
  alt = 'image-button',
  onClick,
}: ImageButtonProps) {
  return (
    <button
      /** 기본적인 모든 단위는 rem
       * 이 컴포넌트는 width와 height가 rem 단위입니다.
       */
      style={{
        width: `${size}rem`,
        height: `${size}rem`,
        padding: '0',
      }}
      className={`image-button shape-${shape}`}
      onClick={onClick}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className={`image-button__image shape-${shape}`}
      />
    </button>
  )
}
