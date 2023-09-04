const getZustandCounts = () => {
  return { count: 1 }
}

export default function SSGPage() {
  const { count } = getZustandCounts()
  return <div>ssg counts: {count}</div>
}
