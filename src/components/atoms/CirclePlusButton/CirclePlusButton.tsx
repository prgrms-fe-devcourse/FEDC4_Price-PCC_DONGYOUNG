import Image from 'next/image'
import Assets from '@/config/assets'
import './index.scss'

type CirclePlusButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export default function CirclePlusButton({ onClick }: CirclePlusButtonProps) {
  return (
    <button onClick={onClick} className="circle-plus-button">
      <Image src={Assets.PlusIcon} alt="글 작성 버튼" />
    </button>
  )
}
