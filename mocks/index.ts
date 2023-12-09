/* eslint-disable @typescript-eslint/no-var-requires, global-require */
import { SetupWorkerApi } from 'msw/lib/browser'
import type { SetupServerApi } from 'msw/lib/node'

if (typeof window === 'undefined') {
  const server: SetupServerApi = require('./server').default
  server.listen()
} else {
  const worker: SetupWorkerApi = require('./browser').default
  worker.start()
}
