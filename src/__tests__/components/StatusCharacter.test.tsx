import { render, screen } from '@testing-library/react';
import StatusCharacter from '../../components/StatusCharacter';

describe('StatusCharacter', () => {
  test('renders StatusCharacter alive', () => {
    render(<StatusCharacter status='Alive' species='Human' gender='Male' />);

    const element = screen.getByText(/human/i);
    expect(element).toBeInTheDocument();

    const element2 = screen.getByText(/male/i);
    expect(element2).toBeInTheDocument();
  });
  test('renders StatusCharacter dead', () => {
    render(<StatusCharacter status='Dead' species='Human' gender='Male' />);

    const element = screen.getByText(/human/i);
    expect(element).toBeInTheDocument();

    const element2 = screen.getByText(/male/i);
    expect(element2).toBeInTheDocument();
  });
  test('renders StatusCharacter unknow', () => {
    render(<StatusCharacter status='unknow' species='Human' gender='Male' />);

    const element = screen.getByText(/human/i);
    expect(element).toBeInTheDocument();

    const element2 = screen.getByText(/male/i);
    expect(element2).toBeInTheDocument();
  });
});
