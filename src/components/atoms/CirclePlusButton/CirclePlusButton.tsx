import Image from 'next/image'
import Assets from '@/config/assets'
import './index.scss'

export default function CirclePlusButton() {
  return (
    <button className="circle-plus-button">
      <Image src={Assets.PlusIcon} alt="글 작성 버튼" />
    </button>
  )
}
