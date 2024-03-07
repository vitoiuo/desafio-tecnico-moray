import { GeoJSON, GeoJSONProps } from 'react-leaflet'
import { GeoJSONOptions } from '@types/leaflet'

export default function GeoJSONLayer (props: GeoJSONProps) {
  const onEachFeature: GeoJSONOptions['onEachFeature'] = (feature, layer) => {
    layer.bindTooltip(`
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
    <GeoJSON
      {...props}
      onEachFeature={onEachFeature}
    />
  )
}