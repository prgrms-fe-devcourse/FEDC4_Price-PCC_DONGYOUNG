import React, {
  useState,
  useRef,
  useEffect,
  ChangeEvent,
  useCallback,
} from 'react'
import Image from 'next/image'
import Assets from '@/config/assets'
import './index.scss'
import useDragging from './useDragging'

type FilePickerProps = {
  name?: string
  multiple?: boolean
  disabled?: boolean
  width?: number
  height?: number
  defaultValue?: string
  onChange?: (_files: FileList | null) => void
  className?: string
}

export default function FilePicker({
  name,
  multiple = false,
  disabled,
  width = 5,
  height = 5,
  defaultValue = '',
  onChange,
  className,
}: FilePickerProps) {
  useEffect(() => {})

  const [_files, setFiles] = useState<FileList | null>(null)
  const [thumbNail, setThumbNail] = useState<string>(defaultValue)
  const dropDownRef = useRef<HTMLDivElement | null>(null)
  const fileUploadRef = useRef<HTMLInputElement | null>(null)

  const createNewThumbNailImage = useCallback((newFiles: FileList) => {
    const blob = new Blob([newFiles[0]], {
      type: newFiles[0].type,
    })

    return URL.createObjectURL(blob)
  }, [])

  const { targetRef } = useDragging(dropDownRef, (newFiles) => {
    setFiles(newFiles)
    const newThumbNailImage = createNewThumbNailImage(newFiles)
    setThumbNail(newThumbNailImage)
    if (onChange) {
      onChange(newFiles)
    }
  })

  const hasThumbNailImage = thumbNail.length !== 0

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
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

  const handleDeleteImage = () => {
    setFiles(null)
    setThumbNail('')
    if (onChange) {
      onChange(null)
    }
  }

  return (
    <div
      className="file-picker"
      ref={targetRef}
      style={{
        width: `${width}rem`,
        height: `${height}rem`,
        border: `${hasThumbNailImage ? 'none' : ''}`,
      }}
    >
      <label className="file-picker__label" htmlFor="file-picker">
        {hasThumbNailImage && (
          <div
            className="file-picker__thumbnail__container"
            style={{
              width: `${width}rem`,
              height: `${height}rem`,
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
        type="button"
        className="file-picker__button"
      >
        {!hasThumbNailImage && (
          <Image
            className="file-picker__button__image"
            src={Assets.UploadImage}
            alt="파일 업로드 이미지"
            width={45}
            height={45}
          />
        )}
      </button>
      <button
        className={`file-picker__delete-button ${thumbNail ? '' : 'hidden'}`}
        type="button"
        onClick={handleDeleteImage}
      >
        X
      </button>
    </div>
  )
}
