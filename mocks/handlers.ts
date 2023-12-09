import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('/api/hello', () =>
    HttpResponse.json({
      name: 'MOCK_NAME',
      timestamp: Date.now(),
    })
  ),
]
