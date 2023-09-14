'use client'

import { Button } from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'
import Quill from '@/components/atoms/Quill'
import FilePicker from '@/components/molcules/file-picker'
import { useUploadForm } from '@/hooks/useUploadForm'
import './index.scss'

export default function NewPostPageTemplate() {
  const { register, onSubmit, titleError, setValue } = useUploadForm()
  return (
    <form className="upload-page" onSubmit={onSubmit}>
      <Input
        type="text"
        placeholder="제목을 입력해주세요"
        variant={titleError ? 'error' : 'clear'}
        outline="underbar"
        style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
        }}
        {...register('title', {
          required: '제목을 입력해주세요',
        })}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault()
          }
        }}
      />
      <Quill
        onEdit={(text) => {
          setValue('description', text)
        }}
      />
      <div className="file-picker-container">
        <FilePicker
          width={20}
          height={10}
          onChange={(file) => {
            setValue('image', file[0])
          }}
        />
      </div>
      <div className="submit-button-container">
        <Button
          text="완료"
          variant="default"
          isShadowed={true}
          rounded="rounded-md"
          width={12}
          height={3}
          type="submit"
        />
      </div>
    </form>
  )
}
