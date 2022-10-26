import type { AppProps } from 'next/app';

import GlobalProviders from '@/components/GlobalProviders';

import '@/styles/globals.css';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'true') {
  import('../../mocks');
}

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <GlobalProviders>
      <Component {...pageProps} />
    </GlobalProviders>
  );
}
