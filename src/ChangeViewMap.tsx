import React from 'react'
import { useMap } from 'react-leaflet'

const ChangeView = ({ center, zoom }) => {
  const map = useMap()

  React.useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom])
  return null
}

export default ChangeView