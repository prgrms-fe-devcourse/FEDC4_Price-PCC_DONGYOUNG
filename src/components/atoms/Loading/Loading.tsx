import './index.scss'

type LoadingProps = {
  size: number
  type: 'spinner' | 'dot'
}
/**
 * 로딩 컴포넌트 (동그라미 회전)
 * @param size number rem 단위
 */
export default function Loading({ size, type = 'spinner' }: LoadingProps) {
  return (
    <div className="loader-container">
      <span
        className={`loader-container__loader--${type}`}
        style={{
          width: `${size}rem`,
          height: `${size}rem`,
        }}
      ></span>
    </div>
  )
}
