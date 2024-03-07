import { http, HttpResponse } from 'msw'
import geometriaBairrosJSON from './data/geometria-bairros.json'
import populacaoBairrosJSON from './data/populacao_bairros.json'

export const handlers = [
  http.get('api/bairros/geometria', () => {
    return HttpResponse.json(geometriaBairrosJSON)
  }),
  http.get('api/bairros/populacao', () => {
    return HttpResponse.json(populacaoBairrosJSON)
  })
]