import { GeoJSON, GeoJSONProps } from 'react-leaflet'
import { GeoJSONOptions } from '@types/leaflet'

interface GeoJsonLayerProps extends GeoJSONProps {
  setSelectedArea: React.Dispatch<React.SetStateAction<number | null>>
}

export default function GeoJSONLayer ({ setSelectedArea, ...props}: GeoJsonLayerProps) {
  const onEachFeature: GeoJSONOptions['onEachFeature'] = (feature, layer) => {
    layer.on({
      click: function () {
        setSelectedArea(feature.properties.id)
      }
    })

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