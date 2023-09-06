import React, { useState, useRef, ChangeEvent } from 'react'
import Image from 'next/image'
import './index.scss'
import uploadFile from '/public/images/upload.png'

type FilePickerProps = {
  name?: string
  multiple?: boolean
  disabled?: boolean
  width?: number
  height?: number
  onChange?: () => void
  label?: string
  className?: string
}

export default function FilePicker({
  name,
  multiple = true,
  disabled,
  width = 24,
  height = 24,
  onChange,
  className,
  label,
}: FilePickerProps) {
  const [files, setFiles] = useState<FileList | null>(null)
  const fileUploadRef = useRef<HTMLInputElement | null>(null)

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(e.target.files)
      if (onChange) {
        onChange()
      }
    }
  }

  const handleOnClickUploadBtn = () => {
    if (fileUploadRef && fileUploadRef.current) {
      fileUploadRef.current.click()
    }
  }

  //여러 파일일 경우 길이를 , 그렇지 않으면 파일명을
  const getFileDescription = (files: FileList | null) => {
    if (files === null) {
      return ''
    }

    if (files.length === 1) {
      return files[0].name
    }

    if (files.length > 1) {
      return `${files.length} files`
    }

    return ''
  }

  return (
    <div className="file-picker">
      <span>{getFileDescription(files)}</span>
      <label content={label}>
        <span>{files === null && label}</span>
        <input
          height={height}
          width={width}
          ref={fileUploadRef}
          type="file"
          name={name}
          multiple={multiple}
          onChange={handleFileChange}
          className={`${className} file-picker__input`}
        />
      </label>

      <button
        disabled={disabled}
        onClick={handleOnClickUploadBtn}
        className="file-picker__button"
      >
        <Image
          src={uploadFile}
          alt="파일 업로드 이미지"
          width={80}
          height={80}
        />
      </button>
    </div>
  )
}
