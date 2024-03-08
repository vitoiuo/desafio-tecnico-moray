import { GeoJSON, GeoJSONProps } from 'react-leaflet'
import { GeoJSONOptions } from 'leaflet'
import { NeighborhoodArea } from '../types'

type AreaContextDispatch = React.Dispatch<React.SetStateAction<NeighborhoodArea | null>>
interface GeoJsonLayerProps extends GeoJSONProps {
  setSelectedArea: AreaContextDispatch,
}

export default function GeoJSONLayer ({ setSelectedArea, ...props}: GeoJsonLayerProps) {
  const onEachFeature: GeoJSONOptions['onEachFeature'] = (feature, layer) => {
    layer.on({
      click: function () {
        setSelectedArea(feature.properties)
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