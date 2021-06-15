import React from 'react';
import axios from 'axios';
import { render, screen } from '@testing-library/react';
import ReviewList from '../../components/RatingsAndReviews/ReviewList';
import '@testing-library/jest-dom';

jest.mock('axios');

const dummyData = {
  data: [
    {
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
    },
    {
      review_id: 406629,
      rating: 3,
      summary: 'Camo Onesie',
      recommend: true,
      response: null,
      body: 'Blend in to your crowd',
      date: '2021-06-07T00:00:00.000Z',
      reviewer_name: 'Jackets',
      helpfulness: 0,
      photos: [],
    },
    {
      review_id: 406628,
      rating: 3,
      summary: 'Camo Onesie',
      recommend: true,
      response: null,
      body: 'Blend in to your crowd',
      date: '2021-06-07T00:00:00.000Z',
      reviewer_name: 'Jackets',
      helpfulness: 0,
      photos: [],
    },
    {
      review_id: 406627,
      rating: 5,
      summary: 'Camo Onesie',
      recommend: true,
      response: null,
      body: 'Blend in to your crowd',
      date: '2021-06-07T00:00:00.000Z',
      reviewer_name: 'Jackets',
      helpfulness: 0,
      photos: [],
    },
    {
      review_id: 406626,
      rating: 5,
      summary: 'Camo Onesie',
      recommend: true,
      response: null,
      body: 'Blend in to your crowd',
      date: '2021-06-07T00:00:00.000Z',
      reviewer_name: 'Jackets',
      helpfulness: 0,
      photos: [],
    },
  ],
};

describe('ReviewList tests', () => {
  test('renders successfully', () => {
    axios.get.mockImplementation(() => Promise.resolve(dummyData));

    render(<ReviewList totalReviews={5} productId={25167} sort={''} loaded={true} />);

    screen.debug();
  });
});

// const exampleData = {
//   product_id: '25167',
//   ratings: {
//     3: 5,
//     4: 1,
//     5: 8,
//   },
//   recommended: {
//     false: 1,
//     true: 13,
//   },
//   characteristics: {
//     Fit: {
//       id: 84504,
//       value: 2.8333333333333333,
//     },
//     Length: {
//       id: 84505,
//       value: 2.8333333333333333,
//     },
//     Comfort: {
//       id: 84506,
//       value: 3.6666666666666667,
//     },
//     Quality: {
//       id: 84507,
//       value: 3.0000000000000000,
//     },
//   },
// };
