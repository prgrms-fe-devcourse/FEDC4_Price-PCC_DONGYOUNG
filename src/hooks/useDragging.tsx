import { useState, useEffect, useCallback, RefObject } from 'react'

export default function useDragging(
  labelRef: RefObject<HTMLLabelElement> | null,
  onDrop: () => void,
) {
  const [, setIsDragging] = useState<boolean>(false)
  const handleDragIn = useCallback((e: DragEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (e.dataTransfer?.items) {
      setIsDragging(true)
    }
  }, [])

  const handleDragOut = useCallback((e: DragEvent) => {
    console.log(e.target)
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }, [])

  const handleDrag = useCallback((e: DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }, [])

  const handleDrop = useCallback(
    (e: DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      setIsDragging(false)

      const eventFiles = e.dataTransfer?.files
      if (eventFiles) {
        onDrop()
      }
    },
    [onDrop],
  )

  useEffect(() => {
    if (labelRef === null) {
      return
    }

    const labelElement = labelRef.current
    labelElement?.addEventListener('dragenter', handleDragIn)
    labelElement?.addEventListener('dragleave', handleDragOut)
    labelElement?.addEventListener('dragover', handleDrag)
    labelElement?.addEventListener('drop', handleDrop)

    return () => {
      labelElement?.removeEventListener('dragenter', handleDragIn)
      labelElement?.removeEventListener('dragleave', handleDragOut)
      labelElement?.removeEventListener('dragover', handleDrag)
      labelElement?.removeEventListener('drop', handleDrop)
    }
  }, [handleDrag, handleDragIn, handleDragOut, handleDrop, labelRef])

  return { labelRef }
}
