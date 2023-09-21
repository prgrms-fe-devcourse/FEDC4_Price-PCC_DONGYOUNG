export default function debounce<T extends (..._args: any[]) => void>(
  func: T,
  delay: number,
) {
  let timeOutId: NodeJS.Timeout | null
  return (..._args: any) => {
    if (timeOutId) {
      clearTimeout(timeOutId)
    }
    timeOutId = setTimeout(() => {
      func(..._args)
    }, delay)
  }
}
