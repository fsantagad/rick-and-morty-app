import { screen } from '@testing-library/react';
import EpisodeTableItem from '../../components/EpisodeTableItem';
import { server } from '../server';
import { handlerEpisodesException } from '../server/serverHandlers';
import { renderWithProviders } from '../testUtils';

describe('EpisodeTableItem', () => {
  test('error 500 EpisodeTableItem', async () => {
    server.use(handlerEpisodesException);
    renderWithProviders(<table>
      <tbody>
        <EpisodeTableItem episodeId='1'/>
      </tbody>
    </table>)

    const errorDisplay = await screen.findByText(/500/i);
    expect(errorDisplay).toBeInTheDocument();
});
  test('renders EpisodeTableItem', async () => {
    renderWithProviders(<table>
        <tbody>
          <EpisodeTableItem episodeId='1'/>
        </tbody>
      </table>);

    const titleElement = await screen.findAllByText(/S01E01/i);
    expect(titleElement[0]).toBeInTheDocument();

    const titleElement2 = await screen.findAllByText(/pilot/i);
    expect(titleElement2[0]).toBeInTheDocument();

    const titleElement3 = await screen.findAllByText(/2013/i);
    expect(titleElement3[0]).toBeInTheDocument();
  });
});
