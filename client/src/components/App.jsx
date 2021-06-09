import React from 'react';
import RatingAndReviews from './RatingsAndReviews/RatingAndReviews';
import RelatedItems from './RelatedItems';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      reviews: [],
    };
  }

  render() {
    const { counter, reviews } = this.state;
    return (
      <>
        <div>{counter}</div>
        <RelatedItems />
        <RatingAndReviews reviews={reviews} />

      </>
    );
  }
}

export default App;
