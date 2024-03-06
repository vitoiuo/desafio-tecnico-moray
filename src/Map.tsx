import React from 'react'
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'
import ChangeView from './ChangeViewMap'

function Map({ geojsonData }) {
  const [mapCenter, setMapCenter] = React.useState([51.505, -0.09])

  React.useEffect(() => {
    if (!geojsonData) return
    const centers = geojsonData.features.map(feature => {
      const [minLon, minLat, maxLon, maxLat] = feature.bbox;
      return [(minLat + maxLat) / 2, (minLon + maxLon) / 2];
    })

    const avgCenter = [
      centers.reduce((total, c) => total + c[0], 0) / centers.length,
      centers.reduce((total, c) => total + c[1], 0) / centers.length
    ]

    setMapCenter(avgCenter)
  }, [geojsonData])

  const onEachFeature = (feature, layer) => {
    layer.bindPopup(`
      <table class="leaflet-popup-content">
        <tr>
          <th>Nome:</th>
          <td>${feature.properties.name}</td>
        </tr>
        <tr>
          <th>Setor:</th>
          <td>${feature.properties.setor}</td>
        </tr>
        <tr>
          <th>Zona:</th>
          <td>${feature.properties.zona}</td>
        </tr>
      </table>
      `)
  }

  return (
    <MapContainer center={mapCenter} zoom={13} style={{ height: "100vh", width: "100%" }}>
      <ChangeView center={mapCenter} zoom={13} />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      /> 
      {geojsonData && (
        <GeoJSON
          data={geojsonData}
          pathOptions={{ color: 'green' }}
          onEachFeature={onEachFeature}
        />
      )}
    </MapContainer>
  )
}

export default Map
