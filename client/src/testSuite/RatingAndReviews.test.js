import React from 'react';
import { render, screen } from '@testing-library/react';
import RatingAndReviews from '../components/RatingAndReviews';
import '@testing-library/jest-dom';

describe('Rating and Reviews module', () => {
  test('renders correctly', () => {
    render(<RatingAndReviews />);

    screen.debug();
  });
});
