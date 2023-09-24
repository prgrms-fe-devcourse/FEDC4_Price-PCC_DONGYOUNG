import './index.scss'

/**
 * 로딩 컴포넌트 (동그라미 회전)
 * @param size number rem 단위
 */
export default function Loading({ size }: { size: number }) {
  return (
    <div className="loader-container">
      <span
        className="loader-container__loader"
        style={{
          width: `${size}rem`,
          height: `${size}rem`,
        }}
      ></span>
    </div>
  )
}
