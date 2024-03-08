import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import { LatLngExpression } from '@types/leaflet'

import { SelectedAreaContext } from '../../SelectedAreaContext'
import { MultiPolygonGeojson } from './types'
import MapPlaceholder from './MapPlaceHolder'
import ChangeView from './ChangeViewMap'
import GeoJSONLayer from './GeoJSONLayer'

export default function Map() {
  const [mapCenter, setMapCenter] = React.useState<LatLngExpression>([51.505, -0.09])
  const [geojsonData, setGeojsonData] = React.useState<MultiPolygonGeojson | null>(null)
  const { setSelectedArea } = React.useContext(SelectedAreaContext)

  React.useEffect(() => {
    fetch('api/bairros/geometria')
      .then(res => res.json())
      .then(setGeojsonData)
      .catch(e => console.error(e))
  }, [])

  React.useEffect(() => {
    if (!geojsonData) return
    const centers = geojsonData.features.map(feature => {
      if (!feature.bbox) return [0, 0]
      const [minLon, minLat, maxLon, maxLat] = feature.bbox
      return [(minLat + maxLat) / 2, (minLon + maxLon) / 2]
    })

    const avgCenter: LatLngExpression = [
      centers.reduce((total, c) => total + c[0], 0) / centers.length,
      centers.reduce((total, c) => total + c[1], 0) / centers.length
    ]

    setMapCenter(avgCenter)
  }, [geojsonData])


  return (
    <MapContainer
      center={mapCenter}
      zoom={13}
      style={{ height: "100%", width: "100%" }}
      placeholder={<MapPlaceholder />}
    >
      <ChangeView center={mapCenter} zoom={14} />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      /> 
      {geojsonData && (
        <GeoJSONLayer
          data={geojsonData}
          pathOptions={{ color: 'green' }}
          setSelectedArea={setSelectedArea}
        />
      )}
    </MapContainer>
  )
}
