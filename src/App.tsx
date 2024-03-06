import './styles.css'
import 'leaflet/dist/leaflet.css'

import React from 'react'
import Map from './Map'

import geojsonData from './geometria-bairros.json'

function App() {
  return (
    <Map geojsonData={geojsonData} />
  )
}

export default App
