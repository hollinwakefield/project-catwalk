import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import WriteReview from '../../components/RatingsAndReviews/WriteReview';
import '@testing-library/jest-dom';

describe('WriteReview', () => {
  afterEach(cleanup);

  test('renders', () => {
    render(<WriteReview productId={25170} />);

    screen.debug();
  });

  test('Modal should only open after click', () => {
    render(<WriteReview productId={25170} />);

    screen.debug();
  });
});
