import { render } from '@testing-library/react'
import Home from '../__mocks__/pages/Home'

it('renders homepage unchanged', () => {
  const { container } = render(<Home />)
  expect(container).toMatchSnapshot()
})
