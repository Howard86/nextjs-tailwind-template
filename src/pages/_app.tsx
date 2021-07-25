import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

import theme from '../theme';

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <ChakraProvider resetCSS theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default App;
