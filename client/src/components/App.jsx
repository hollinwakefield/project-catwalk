import React from 'react';
import RatingAndReviews from './RatingsAndReviews/RatingAndReviews';

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
        <RatingAndReviews reviews={reviews} />
      </>
    );
  }
}

export default App;
