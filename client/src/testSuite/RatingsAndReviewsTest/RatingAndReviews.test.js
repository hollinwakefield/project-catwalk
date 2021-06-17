import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import RatingAndReviews from '../../components/RatingsAndReviews/RatingAndReviews';
import '@testing-library/jest-dom';

describe('Rating and Reviews module', () => {
  afterEach(cleanup);

  test('renders', () => {
    render(<RatingAndReviews reviews={ {results: "fake data"}} />);

    screen.debug();
  });
});
