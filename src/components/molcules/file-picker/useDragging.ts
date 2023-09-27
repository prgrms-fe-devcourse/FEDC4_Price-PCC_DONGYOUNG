import { useState, useEffect, useCallback, RefObject } from 'react'

export default function useDragging(
  targetRef: RefObject<HTMLDivElement> | null,
  onDrop: (_files: FileList) => void,
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
        onDrop(eventFiles)
      }
    },
    [onDrop],
  )

  useEffect(() => {
    if (targetRef === null) {
      return
    }

    const targetElement = targetRef.current
    targetElement?.addEventListener('dragenter', handleDragIn)
    targetElement?.addEventListener('dragleave', handleDragOut)
    targetElement?.addEventListener('dragover', handleDrag)
    targetElement?.addEventListener('drop', handleDrop)

    return () => {
      targetElement?.removeEventListener('dragenter', handleDragIn)
      targetElement?.removeEventListener('dragleave', handleDragOut)
      targetElement?.removeEventListener('dragover', handleDrag)
      targetElement?.removeEventListener('drop', handleDrop)
    }
  }, [handleDrag, handleDragIn, handleDragOut, handleDrop, targetRef])

  return { targetRef }
}
