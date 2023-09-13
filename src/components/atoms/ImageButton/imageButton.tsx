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
  size = 50,
  src,
  alt = 'image-button',
  onClick,
}: ImageButtonProps) {
  return (
    <button
      style={{
        width: size,
        height: size,
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
