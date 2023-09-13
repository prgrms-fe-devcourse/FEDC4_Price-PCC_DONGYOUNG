import Input from '@/components/atoms/Input'
import FilePicker from '@/components/molcules/file-picker'
import './index.scss'

export default function NewPostPageTemplate() {
  return (
    <div className="upload-page">
      <Input
        type="text"
        placeholder="Title"
        variant="clear"
        outline="underbar"
      />
      <textarea placeholder="Content" />
      <FilePicker />
      <button>Submit</button>
    </div>
  )
}
