import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '../testUtils';
import CharacterDetails from '../../components/CharacterDetails';
import { charactersResponse } from '../server/mock/charactersResponse';
import { Character, RootState } from '../../store';

describe('CharacterDetails', () => {
  test('renders CharacterDetails', () => {
    renderWithProviders(<CharacterDetails/>,
    {
      preloadedState: {
        selectedCharacter: {
          data: charactersResponse.results[0] as Character
        }
      } as RootState
    });

    const titleElement = screen.getByText(/rick/i);
    expect(titleElement).toBeInTheDocument();

    const imageRef = screen.getByAltText(/rick/i);
    fireEvent.load(imageRef);
    expect(imageRef).toHaveAttribute('src', expect.stringContaining('1.jpeg'));

  });
});
