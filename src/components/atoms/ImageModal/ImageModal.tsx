'use client'

import React from 'react'
import { Card } from '../Card'
import { Portal } from '../Portal'
import './index.scss'

/**
 * 모달 컴포넌트의 프롭 정의
 * Card컴포넌트와 마찬가지로 width,height를 rem단위의 숫자로 받습니다.
 *
 * @typedef {Object} ModalProps
 * @property {React.ReactNode} children - 모달 내부에 표시할 콘텐츠
 * @property {boolean} isOpen - 모달이 열려 있는지 여부
 * @property {'start' | 'center' | 'end'} [align] - 모달 내용의 수평 정렬 위치
 * @property {React.CSSProperties} [style] - 모달에 적용할 스타일
 * @property {width} number - 모달의 너비(rem기준)
 * @property {height} number - 모달의 높이(rem기준)
 * @property {() => void} onCloseModal - 모달을 닫는 콜백 함수
 */

type ImageModalProps = {
  children: React.ReactNode
  isOpen: boolean
  align?: 'start' | 'center' | 'end'
  style?: React.CSSProperties
  onCloseModal: () => void
  width: number
  height: number
}

export default function ImageModal({
  children,
  isOpen,
  width = 1.18,
  height = 1.71,
  align,
  onCloseModal,
  style,
}: ImageModalProps) {
  return (
    <>
      <Portal>
        {isOpen ? (
          <div
            className={`modal--container__absolute align-${align}`}
            style={{ ...style, width: `${width}rem`, height: `${height}rem` }}
            onClick={onCloseModal}
          >
            <Card style={{ width: `${width}rem`, height: `${height}rem` }}>
              {children}
            </Card>
          </div>
        ) : (
          <></>
        )}
      </Portal>
    </>
  )
}
