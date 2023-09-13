'use client'

import { Button } from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'
import Quill from '@/components/atoms/Quill'
import FilePicker from '@/components/molcules/file-picker'
import './index.scss'

export default function NewPostPageTemplate() {
  return (
    <div className="upload-page">
      <Input
        type="text"
        placeholder="제목을 입력해주세요"
        variant="clear"
        outline="underbar"
        style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
        }}
      />
      <Quill />
      <div className="file-picker-container">
        <FilePicker width={20} height={10} />
      </div>
      <div className="submit-button-container">
        <Button
          onClick={(e) => console.log(e)}
          text="완료"
          variant="default"
          isShadowed={true}
          rounded="rounded-md"
          width={12}
          height={3}
        />
      </div>
    </div>
  )
}
