import React from 'react';
import { render, screen } from '@testing-library/react';
import RelatedItems from '../components/RelatedItems';
import CardList from '../components/RelatedItemsComponents/CardList';
// eslint-disable-next-line import/no-unresolved
import '@testing-library/jest-dom';

describe('Related Items', () => {
  test('renders Related Items component', () => {
    render(<CardList />);

    expect(screen.getByRole('heading')).toBeInTheDocument('Related Items!');
  });
});
