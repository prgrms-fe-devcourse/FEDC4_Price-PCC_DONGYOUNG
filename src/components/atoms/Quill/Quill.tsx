'use client'

import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { modules, formats } from './quillModule'

type QuillProps = {
  onEdit?: (_contents: string) => void
}

export default function Quill({ onEdit }: QuillProps) {
  return (
    <div>
      <ReactQuill onChange={onEdit} modules={modules} formats={formats} />
    </div>
  )
}
