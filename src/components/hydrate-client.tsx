'use client'

import { Hydrate as RQHydrate, HydrateProps } from '@tanstack/react-query'

function ReactQueryHydrate(props: HydrateProps) {
  return <RQHydrate {...props} />
}

export default ReactQueryHydrate
