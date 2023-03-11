import { screen } from '@testing-library/react'
import CharacterItem from '../../components/CharacterItem';
import { charactersResponse } from '../server/mock/charactersResponse';
import { Character } from '../../store';
import { renderWithProviders } from '../testUtils';

describe('CharacterItem', () => {
  test('renders CharacterItem', async () => {
      const mockOpenModal = jest.fn();
      renderWithProviders(<CharacterItem
          character={charactersResponse.results[0] as Character}
          setModalOpen={mockOpenModal}
        />)

      const titleElement = screen.getByText(/rick/i);
      expect(titleElement).toBeInTheDocument();;
  });

});
