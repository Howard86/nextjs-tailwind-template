import { rest } from 'msw'

import { generateResponseResolver } from './utils'

const handlers = [
  rest.get(
    '/api/hello',
    generateResponseResolver<Local.HelloApi>({
      name: 'MOCK_NAME',
      timestamp: Date.now(),
    })
  ),
]

export default handlers
