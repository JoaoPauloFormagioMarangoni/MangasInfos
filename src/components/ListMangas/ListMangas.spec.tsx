import { render, screen } from '@testing-library/react'
import { ListMangas } from '.';

jest.mock('@tanstack/react-query', () => ({
    data: undefined,
    fetchNextPage: () => undefined,
    hasNextPage: true,
    isFetchingNextPage: true,
    status: 'success',
}))

describe('ListMangas Component', () => {
    it('should render items list', async () => {
        render(<ListMangas />)

        screen.logTestingPlaygroundURL()
    });
})