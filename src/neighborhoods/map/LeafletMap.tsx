import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import { LatLngExpression } from 'leaflet'

import { SelectedAreaContext } from '../SelectedAreaContext'
import { MultiPolygonGeoJSON } from './types'
import MapPlaceholder from './MapPlaceHolder'
import ChangeView from './ChangeViewMap'
import GeoJSONLayer from './GeoJSONLayer'

export default function Map() {
  const { setValue: setSelectedArea } = SelectedAreaContext.useValue()
  const [mapCenter, setMapCenter] = React.useState<LatLngExpression>([51.505, -0.09])
  const [geoJSONData, setGeoJSONData] = React.useState<MultiPolygonGeoJSON | null>(null)

  React.useEffect(() => {
    fetch('api/bairros/geometria')
      .then(res => res.json())
      .then(setGeoJSONData)
      .catch(e => console.error(e))
  }, [])

  React.useEffect(() => {
    if (!geoJSONData) return
    const centers = geoJSONData.features.map(feature => {
      if (!feature.bbox) return [0, 0]
      const [minLon, minLat, maxLon, maxLat] = feature.bbox
      return [(minLat + maxLat) / 2, (minLon + maxLon) / 2]
    })

    const avgCenter: LatLngExpression = [
      centers.reduce((total, c) => total + c[0], 0) / centers.length,
      centers.reduce((total, c) => total + c[1], 0) / centers.length
    ]

    setMapCenter(avgCenter)
  }, [geoJSONData])


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
      {geoJSONData && (
        <GeoJSONLayer
          data={geoJSONData}
          pathOptions={{ color: 'green' }}
          setSelectedArea={setSelectedArea}
        />
      )}
    </MapContainer>
  )
}
