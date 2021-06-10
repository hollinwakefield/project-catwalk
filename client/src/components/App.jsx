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
      reviews: {},
      cart: [],
    };
  }

  componentDidMount() {
    axios.get('/products/25168')
      .then((res) => {
        this.setState({ product: res.data });
      })
      .catch((err) => {
        console.log(err);
      });

    // fetch reviews from API - Steven
    axios.get('/reviews/25168')
      .then((res) => {
        this.setState({ reviews: res.data });
      })
      .catch((err) => {
        console.log(err);
      });

    // fetch cart from API - Kate
    axios.get('/cart')
      .then((res) => {
        this.setState({ cart: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { product, reviews, cart } = this.state;
    return (
      <>
        <ProductOverview product={product} cart={cart} />
        <RelatedItems />
        <RatingAndReviews reviews={reviews} />
      </>
    );
  }
}

export default App;
