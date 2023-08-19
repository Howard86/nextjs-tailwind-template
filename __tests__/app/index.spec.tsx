import { render, screen } from '@testing-library/react'
import React from 'react'

import Home from '../../src/app/page'

describe('home', () => {
  it('renders a heading', () => {
    expect.hasAssertions()
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
