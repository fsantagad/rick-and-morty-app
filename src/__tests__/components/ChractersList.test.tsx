import { act, screen, waitFor } from '@testing-library/react';
import CharactersList from '../../components/CharactersList';
import { renderWithProviders } from '../testUtils';
import { server } from '../server';
import { handlerCharactersException } from '../server/serverHandlers';
import userEvent from '@testing-library/user-event';

describe('CharactersList', () => {
  test('error 500 CharactersList', async () => {
      server.use(handlerCharactersException);
      renderWithProviders(<CharactersList />)

      const errorDisplay = await screen.findByText(/500/i);
      expect(errorDisplay).toBeInTheDocument();
  });

  test('renders CharactersList', async () => {
    renderWithProviders(<CharactersList />);

    const titleElement = await screen.findAllByText(/rick/i);
    expect(titleElement[0]).toBeInTheDocument();

    const titleElement2 = await screen.findAllByText(/morty/i);
    expect(titleElement2[0]).toBeInTheDocument();

    // open modal
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => { // workaround to not see act error message
      userEvent.click(titleElement[0]);
    });
    await new Promise((resolve) => setTimeout(resolve, 0));

    await waitFor(() => {
        expect(screen.getByText(/episodes/i)).toBeInTheDocument();
    });

    // close modal
    const close = screen.getByRole('button');
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => { // workaround to not see act error message
      userEvent.click(close);
    });
    await new Promise((resolve) => setTimeout(resolve, 0));

    await waitFor(() => {
        expect(screen.queryByText(/episodes/i)).not.toBeInTheDocument();
    });


  });
});
