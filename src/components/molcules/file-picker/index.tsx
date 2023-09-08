import React, {
  useState,
  useRef,
  useEffect,
  ChangeEvent,
  useCallback,
} from 'react'
import Image from 'next/image'
import './index.scss'
import useDragging from './useDragging'
import uploadImage from '/public/images/uploadImage.svg'

type FilePickerProps = {
  name?: string
  multiple?: boolean
  disabled?: boolean
  width?: number
  height?: number
  onChange?: (_files: FileList) => void
  className?: string
}

export default function FilePicker({
  name,
  multiple = false,
  disabled,
  width = 150,
  height = 150,
  onChange,
  className,
}: FilePickerProps) {
  useEffect(() => {})
  const [_files, setFiles] = useState<FileList | null>(null)
  const [thumbNail, setThumbNail] = useState<string>('')
  const dropDownRef = useRef<HTMLDivElement | null>(null)
  const fileUploadRef = useRef<HTMLInputElement | null>(null)

  const createNewThumbNailImage = useCallback((files: FileList) => {
    const blob = new Blob([files[0]], {
      type: files[0].type,
    })

    return URL.createObjectURL(blob)
  }, [])

  const { targetRef } = useDragging(dropDownRef, (_newFiles) => {
    setFiles(_newFiles)
    const newThumbNailImage = createNewThumbNailImage(_newFiles)
    setThumbNail(newThumbNailImage)
    if (onChange) {
      onChange(_newFiles)
    }
  })

  const hasThumbNailImage = thumbNail.length !== 0

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(e.target.files)
      if (onChange) {
        onChange(e.target.files)
        const blob = new Blob([e.target.files[0]], {
          type: e.target.files[0].type,
        })

        const thumbNailImage = URL.createObjectURL(blob)
        setThumbNail(thumbNailImage)
      }
    }
  }

  const handleOnClickUploadBtn = () => {
    if (fileUploadRef && fileUploadRef.current) {
      fileUploadRef.current.click()
    }
  }

  return (
    <div
      className="file-picker"
      ref={targetRef}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        border: `${hasThumbNailImage && 'none'}`,
      }}
    >
      <label className="file-picker__label" htmlFor="file-picker">
        {hasThumbNailImage && (
          <div
            className="file-picker__thumbnail__container"
            style={{
              width: `${width}px`,
              height: `${height}px`,
              position: 'relative',
            }}
          >
            <Image
              src={thumbNail || ''}
              fill
              alt="썸네일 이미지"
              className="file-picker__thumbnail"
              style={{
                cursor: 'pointer',
              }}
            />
          </div>
        )}

        <input
          id="file-picker"
          height={height}
          width={width}
          ref={fileUploadRef}
          type="file"
          name={name}
          disabled={disabled}
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
        {!hasThumbNailImage && (
          <Image
            className="file-picker__button__image"
            src={uploadImage}
            alt="파일 업로드 이미지"
            width={45}
            height={45}
          />
        )}
      </button>
    </div>
  )
}
