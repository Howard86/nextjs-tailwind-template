import React from 'react';
import { customRender, screen } from 'test-utils';

import Home from '@/pages/index';

describe('home', () => {
  it('renders a heading', () => {
    expect.hasAssertions();
    customRender(<Home />);

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
