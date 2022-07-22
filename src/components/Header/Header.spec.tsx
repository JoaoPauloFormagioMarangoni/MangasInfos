import { render } from '@testing-library/react'
import { Header } from '.';

describe('Header Component', () => {
    it('should render items list', async () => {
        const { getByText } = render(<Header />)

        expect(getByText('Fórum')).toBeInTheDocument()
        expect(getByText('Recomendados')).toBeInTheDocument()
        expect(getByText('Gêneros')).toBeInTheDocument()
        expect(getByText('Random')).toBeInTheDocument()
    });
})