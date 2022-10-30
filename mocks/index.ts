/* eslint-disable @typescript-eslint/no-var-requires, global-require */
import type { SetupWorkerApi } from 'msw';
import type { SetupServerApi } from 'msw/lib/node';

if (typeof window === 'undefined') {
  const server: SetupServerApi = require('./server').default;
  server.listen();
} else {
  const worker: SetupWorkerApi = require('./browser').default;
  worker.start();
}
