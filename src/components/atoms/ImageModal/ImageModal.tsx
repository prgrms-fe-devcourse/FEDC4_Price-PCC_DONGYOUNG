import React from 'react'
import { Card } from '../Card'
import type { CardProps } from '../Card/Card'
import { Portal } from '../Portal'
import './index.scss'

/**
 * 모달 컴포넌트의 프롭 정의
 * Card컴포넌트와 마찬가지로 width,height를 rem단위의 숫자로 받습니다.
 *
 * @typedef {Object} ModalProps
 * @property {React.ReactNode} children - 모달 내부에 표시할 콘텐츠
 * @property {boolean} isOpen - 모달이 열려 있는지 여부
 * @property {boolean} fillBackground - 모달 주위를 100%로 채울지 여부
 * @property {'start' | 'center' | 'end'} [align] - 모달 내용의 수평 정렬 위치
 * @property {React.CSSProperties} [style] - 모달에 적용할 스타일
 * @property {() => void} onCloseModal - 모달을 닫는 콜백 함수
 */

type ModalProps = CardProps & {
  children: React.ReactNode
  isOpen: boolean
  fillBackground: boolean
  align?: 'start' | 'center' | 'end'
  style?: React.CSSProperties
  onCloseModal: () => void
}

export default function Modal({
  children,
  isOpen,
  width = 19,
  height = 27.5,
  fillBackground = true,
  align,
  onCloseModal,
  style,
}: ModalProps) {
  return (
    <>
      {fillBackground && (
        <Portal>
          {isOpen ? (
            <div
              className={`modal--container__absolute align-${align}`}
              style={style}
              onClick={onCloseModal}
            >
              <Card width={width} height={height}>
                {children}
              </Card>
            </div>
          ) : (
            <></>
          )}
        </Portal>
      )}

      {!fillBackground && isOpen && (
        <div
          className={`modal--container__relative ${align}`}
          style={style}
          onClick={onCloseModal}
        >
          <div
            style={{
              width: `${width}rem`,
              height: `${height}rem`,
              position: 'relative',
            }}
          >
            {children}
          </div>
        </div>
      )}
    </>
  )
}
