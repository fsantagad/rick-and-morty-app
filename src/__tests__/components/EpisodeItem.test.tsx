import { screen } from '@testing-library/react';
import EpisodeItem from '../../components/EpisodeItem';
import { server } from '../server';
import { handlerEpisodesException } from '../server/serverHandlers';
import { renderWithProviders } from '../testUtils';

describe('EpisodeItem', () => {
  test('error 500 EpisodeItem', async () => {
    server.use(handlerEpisodesException);
    renderWithProviders(<EpisodeItem episodeId='1'/>);

    const errorDisplay = await screen.findByText(/500/i);
    expect(errorDisplay).toBeInTheDocument();
});
  test('renders EpisodeItem', async () => {
    renderWithProviders(<EpisodeItem episodeId='1'/>);

    const titleElement = await screen.findByText(/pilot/i);
    expect(titleElement).toBeInTheDocument();
  });
});
