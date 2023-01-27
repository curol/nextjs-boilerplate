import Home from '../__mocks__/pages/Home'

import { render, screen } from '@testing-library/react'
// import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    // https://testing-library.com/docs/guide-disappearance/#nottobeinthedocument
    expect(heading).toBeInTheDocument()
  })
})
