import React from 'react';

import type { AppProps } from 'next/app';

import GlobalProviders from '@/components/GlobalProviders';

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <GlobalProviders>
    <Component {...pageProps} />
  </GlobalProviders>
);

export default App;
