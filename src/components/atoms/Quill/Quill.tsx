import 'react-quill/dist/quill.snow.css'
import dynamic from 'next/dynamic'
import Loading from '../Loading'
import './index.scss'
import { modules, formats } from './quillModule'

const ReactQuill = dynamic(() => import('react-quill'), {
  loading: () => <Loading size={3} />,
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
