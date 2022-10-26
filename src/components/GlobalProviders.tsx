import { ChildrenProps } from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import store from '@/redux/store';

export default function GlobalProviders({ children }: ChildrenProps) {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
}
