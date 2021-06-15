import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import RatingAndReviews from '../../components/RatingsAndReviews/RatingAndReviews.jsx';
import '@testing-library/jest-dom';

describe('Rating and Reviews module', () => {
  afterEach(cleanup);
  // Hi Steven
  test('renders', () => {
    render(<RatingAndReviews reviews={ {results: "fake data"}} />);

    screen.debug();
  });
});
