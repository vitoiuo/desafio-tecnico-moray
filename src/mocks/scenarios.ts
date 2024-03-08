import { http, HttpResponse } from 'msw'

export const scenarios = {
  error: [
    http.get('api/bairros/geometria', () => {
      return new HttpResponse(null, { status: 500 })
    }),
  ],
}