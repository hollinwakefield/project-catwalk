import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import RatingBreakdown from '../../components/RatingsAndReviews/RatingBreakdown';
import '@testing-library/jest-dom';

describe('RatingBreakdown tests', () => {
  test('renders successfully', () => {
    render(<RatingBreakdown totalReviews={5} recommended={'93% of reviews recommend this product'} avg={3.5} />);

    screen.debug();
  });
});
