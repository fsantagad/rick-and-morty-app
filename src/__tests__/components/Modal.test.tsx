import { render, screen } from '@testing-library/react';
import Modal from '../../components/Modal';

describe('Modal', () => {
  test('renders Modal', () => {
    const mockClose = jest.fn();
    render(<Modal isOpen={true} title='Titolo Modale' closeModal={mockClose} />);

    const titleElement = screen.getByText(/modale/i);
    expect(titleElement).toBeInTheDocument();
  });
});
