const reviews = require('./reviewsAPI');

// Test average helper function that will be used in getAverageRatingById
test('gets the average of an array of numbers', () => {
  expect(reviews.average([1, 2, 3])).toBe(2);
});

test('gets the average of an array of numbers', () => {
  expect(reviews.average([3])).toBe(3);
});

test('gets the average of an array of numbers', () => {
  expect(reviews.average([0])).toBe(0);
});

// Test getAverageRatingById helper function
