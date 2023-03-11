import { screen } from '@testing-library/react';
import EpisodesList from '../../components/EpisodesList';
import { charactersResponse } from '../server/mock/charactersResponse';
import { renderWithProviders } from '../testUtils';

describe('EpisodesList', () => {
  test('renders EpisodesList', async () => {
    renderWithProviders(<EpisodesList listEpisodes={[charactersResponse.results[0].episode[0]]} />);

    const titleElement = await screen.findAllByText(/S01E01/i);
    expect(titleElement[0]).toBeInTheDocument();
  });
});
