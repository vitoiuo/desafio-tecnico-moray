import React from 'react'
import { useMap } from 'react-leaflet'
import { LatLngExpression } from 'leaflet'

export interface ChangeViewProps {
  center: LatLngExpression,
  zoom: number
}

export default function ChangeView ({ center, zoom }: ChangeViewProps) {
  const map = useMap()

  React.useEffect(() => {
    map.setView(center, zoom)
  }, [center, zoom])
  return null
}