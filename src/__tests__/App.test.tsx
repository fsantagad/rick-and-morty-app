import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import { renderWithProviders } from './testUtils';

test('renders APP', () => {
  renderWithProviders(<App />);
  const linkElement = screen.getByText(/app/i);
  expect(linkElement).toBeInTheDocument();
});
