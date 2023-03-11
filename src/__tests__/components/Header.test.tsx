import { render, screen } from '@testing-library/react';
import Header from '../../components/Header';

describe('Header', () => {
  test('renders Header', () => {
    const mockToggler = jest.fn();
    render(<Header title='Title' theme='dark' themeToggler={mockToggler} />);

    const titleElement = screen.getByText(/title/i);
    expect(titleElement).toBeInTheDocument();
  });
});
