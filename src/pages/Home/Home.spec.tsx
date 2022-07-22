import { render, within } from '@testing-library/react'
import Home from '.'

jest.mock('../../assets/background.jpg')

describe('Home Component', () => {
  it('should render title', async () => {
    const { getByRole } = render(<Home />)

    within(getByRole('contentinfo')).getByRole('heading', {
      name: /mangás\.infos/i,
    })
  })
})
