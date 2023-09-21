import 'react-quill/dist/quill.snow.css'
import dynamic from 'next/dynamic'
import './index.scss'
import { modules, formats } from './quillModule'

const ReactQuill = dynamic(() => import('react-quill'), {
  loading: () => <div>...loading</div>,
  ssr: false,
})

type QuillProps = {
  onEdit?: (_contents: string) => void
  defaultValue?: string
}

export default function Quill({ onEdit, defaultValue }: QuillProps) {
  return (
    <div>
      <ReactQuill
        defaultValue={defaultValue}
        className="quill"
        onChange={onEdit}
        modules={modules}
        formats={formats}
      />
    </div>
  )
}
