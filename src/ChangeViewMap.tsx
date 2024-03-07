import React from 'react'
import { useMap } from 'react-leaflet'
import { LatLngExpression } from '@types/leaflet'

interface ChangeViewProps {
  center: LatLngExpression
  zoom: number
} 

export default function ChangeView ({ center, zoom }: ChangeViewProps) {
  const map = useMap()

  React.useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom])
  return null
}