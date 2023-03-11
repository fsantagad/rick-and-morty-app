import { render, screen } from '@testing-library/react';
import ToggleButton from '../../components/ToggleButton';

describe('ToggleButton', () => {
  test('renders ToggleButton', () => {
    const mockClick=jest.fn();
    render(<ToggleButton theme={'light'} onClick={mockClick} />);

    const element = screen.getByLabelText(/light mode/i);
    expect(element).toBeInTheDocument();
  });
});
