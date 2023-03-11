import { screen } from '@testing-library/react';
import LocationDetail from '../../components/LocationDetail';
import { server } from '../server';
import { handlerLocationsException } from '../server/serverHandlers';
import { renderWithProviders } from '../testUtils';

describe('LocationDetail', () => {
  test('error 500 t', async () => {
    server.use(handlerLocationsException);
    renderWithProviders(<LocationDetail locationId={'1'} label={'Label'}/>)

    const errorDisplay = await screen.findByText(/500/i);
    expect(errorDisplay).toBeInTheDocument();
});
  test('renders LocationDetail', async () => {
    renderWithProviders(<LocationDetail locationId={'1'} label={'Label'} />);

    const titleElement = await screen.findAllByText(/earth/i);
    expect(titleElement[0]).toBeInTheDocument();
  });
});
