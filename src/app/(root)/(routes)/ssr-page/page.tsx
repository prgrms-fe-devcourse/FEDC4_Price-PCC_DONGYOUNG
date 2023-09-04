const getZustandCounts = () => {
  return { bears: 1 }
}

export default function SSRPage() {
  const { bears } = getZustandCounts()
  return <div>ssr counts: {bears.toString()}</div>
}
