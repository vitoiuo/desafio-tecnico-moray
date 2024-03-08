export interface NeighborhoodArea extends GeoJSON.Feature<GeoJSON.MultiPolygon> {
  id: number,
  name: string,
  setor: string,
  zona: string
}