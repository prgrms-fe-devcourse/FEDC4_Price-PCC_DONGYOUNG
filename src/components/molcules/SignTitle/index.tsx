import './index.scss'

interface SignTitleProps {
  text?: string
}

const SignTitle = ({ text }: SignTitleProps) => {
  return (
    <>
      <div className="sign-title">{text}</div>
    </>
  )
}

export default SignTitle
