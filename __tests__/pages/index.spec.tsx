import React from 'react';

import { customRender, screen } from 'test-utils';

import Home from '@/pages/index';

describe('Home', () => {
  it('renders a heading', () => {
    customRender(<Home />);

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
