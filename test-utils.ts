import { ReactElement } from 'react';

import { render } from '@testing-library/react';

import GlobalProviders from '@/components/GlobalProviders';

export const customRender = (ui: ReactElement, options = {}) =>
  render(ui, { wrapper: GlobalProviders, ...options });

export * from '@testing-library/react';
