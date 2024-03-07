import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import { LatLngExpression, GeoJSON } from '@types/leaflet'
import ChangeView from './ChangeViewMap'
import GeoJSONLayer from './GeoJSONLayer'

interface MapProps {
  geojsonData: GeoJSON.FeatureCollection<GeoJSON.MultiPolygon>
}

export default function Map({ geojsonData }: MapProps) {
  const [mapCenter, setMapCenter] = React.useState<LatLngExpression>([51.505, -0.09])

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
      style={{ height: "100vh", width: "100%" }}
    >
      <ChangeView center={mapCenter} zoom={13} />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      /> 
      {geojsonData && (
        <GeoJSONLayer
          data={geojsonData}
          pathOptions={{ color: 'green' }}
        />
      )}
    </MapContainer>
  )
}
