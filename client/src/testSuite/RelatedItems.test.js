import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import CardList from '../components/RelatedItemsComponents/CardList';
import Card from '../components/RelatedItemsComponents/Card';
import exampleData from '../components/RelatedItemsComponents/exampleData.json';

// eslint-disable-next-line import/no-unresolved
import '@testing-library/jest-dom';

// ============== CARDLIST TESTS =============== //
describe('CardList testing suite', () => {
  beforeEach(cleanup);
  test('Check if the header was', () => {
    render(<CardList />);
    expect(screen.getByText('Related Items!')).toBeInTheDocument();
  });

  test('check if correct number of card components has rendered successfully', () => {
    render(<CardList />);
    // Set the counter to be the length of example data
    const counter = exampleData.items.length;
    // Test to see if there are 2 cards, same as the length of the items array
    expect(screen.queryAllByTestId('card')).toHaveLength(counter);
  });
});
