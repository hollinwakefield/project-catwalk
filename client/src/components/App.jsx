import React from 'react';
import axios from 'axios';
import ProductOverview from './productOverview/productOverview';
import RatingAndReviews from './RatingsAndReviews/RatingAndReviews';
import RelatedItems from './RelatedItems';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      reviews: [],
      cart: [],
    };
  }

  componentDidMount() {
    axios.get('/products/25168')
      .then((res) => {
        const product = res.data;
        this.setState({ product: product });
      })
      .catch((err) => {
        console.log(err);
      });

    // fetch reviews from API - Steven

    // fetch cart from API - Kate
  }

  render() {
    const { reviews } = this.state;
    return (
      <>
        <ProductOverview />
        <RelatedItems />
        <RatingAndReviews reviews={reviews} />
      </>
    );
  }
}

export default App;
