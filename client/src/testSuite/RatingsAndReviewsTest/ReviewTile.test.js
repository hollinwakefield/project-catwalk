import React from 'react';
import axios from 'axios';
import { render, screen, cleanup } from '@testing-library/react';
import Tile from '../../components/RatingsAndReviews/ReviewTile';
import '@testing-library/jest-dom';

jest.mock('axios');

const dummyData = {
  review_id: 406630,
  rating: 5,
  summary: 'Camo Onesie',
  recommend: true,
  response: null,
  body: 'Blend in to your crowd',
  date: '2021-06-07T00:00:00.000Z',
  reviewer_name: 'test post',
  helpfulness: 0,
  photos: [],
};

const longData = {
  review_id: 406630,
  rating: 5,
  summary: 'Camo Onesie',
  recommend: true,
  response: null,
  body: 'Blend in to your crowd honey baby sugarcup sweetypie gummy bears Kate Jeon Chhuong Le how are you two doing, my beloved beloved partners how many more characters until 250... I am not sure but I will continue typing. One day I hope to see you two in the future again, even though the ties of convenience currently hold us together. Regardless, I will keep a memory of you two in my heart. Cheesy pie.',
  date: '2021-06-07T00:00:00.000Z',
  reviewer_name: 'test post',
  helpfulness: 0,
  photos: [],
};

describe('ReviewTile tests', () => {
  afterEach(cleanup);

  test('renders successfully', () => {
    render(<Tile data={dummyData} />);

    expect(screen.queryByRole('button')).toBeNull();
  });

  test('renders with body size over 250 characters', () => {
    render(<Tile data={longData} />);

    expect(screen.getByRole('button', { name: 'Show More' })).toBeInTheDocument();
  });
});
