import { render, screen } from '@testing-library/react';
import CharacterItemSkeleton from '../../components/CharacterItemSkeleton';

describe('CardSkeleton', () => {
  test('renders CardSkeleton', () => {
    render(<CharacterItemSkeleton amount={2}/>);

    expect(screen.queryAllByTestId("container")).toHaveLength(2)
  });
});
