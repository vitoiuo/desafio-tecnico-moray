import { http, HttpResponse } from 'msw'
import geometriaBairrosJSON from './data/geometria-bairros.json'
import populacaoBairrosJSON from './data/populacao_bairros.json'

export const handlers = [
  http.get('api/bairros/geometria', () => {
    return HttpResponse.json(geometriaBairrosJSON)
  }),
  http.get('api/bairros/populacao', ({request}) => {
    const url = new URL(request.url)
    const bairroId = url.searchParams.get('id')

    if (!bairroId) return new HttpResponse(null, { status: 404 })
    const response = populacaoBairrosJSON.filter((bairro) => (
      bairro.id_geometria === +bairroId
    ))
    return HttpResponse.json(response)
  })
]