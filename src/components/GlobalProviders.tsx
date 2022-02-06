import React, { ReactNode } from 'react';

import { Provider as ReduxProvider } from 'react-redux';

import store from '@/redux/store';

interface GlobalProvidersProps {
  children: ReactNode;
}

const GlobalProviders = ({ children }: GlobalProvidersProps) => (
  <ReduxProvider store={store}>{children}</ReduxProvider>
);

export default GlobalProviders;
