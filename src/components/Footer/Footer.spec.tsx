import { render } from '@testing-library/react'
import { Footer } from '.'

describe('Footer Component', () => {
    it('should render copyright name', async () => {
        const { getByText } = render(<Footer />)

        expect(getByText('© João Paulo Formagio Marangoni')).toBeInTheDocument()
    });

    it('should render title', async () => {
        const { getByText } = render(<Footer />)

        expect(getByText('Mangás.Infos')).toBeInTheDocument()
    })
})