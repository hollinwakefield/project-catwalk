import React from 'react';
import axios from 'axios';
import ProductOverview from './productOverview/productOverview';
import RatingAndReviews from './RatingsAndReviews/RatingAndReviews';
import RelatedItems from './RelatedItems';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      reviews: null,
      cart: [],
    };
    // initializer();
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
    axios.get('/reviews/25168')
      .then((res) => {
        this.setState({ reviews: res.data });
      })
      .catch((err) => {
        console.log(err);
      })
    // fetch cart from API - Kate
  }

  render() {
    const { product, reviews } = this.state;
    if (product && reviews) {
    return (
      <>
        <ProductOverview />
        <RelatedItems />
        <RatingAndReviews reviews={reviews} />
      </>
    );
    }
    return (<div>        <ProductOverview />
    <RelatedItems /></div>);
  }
}

export default App;

// attempted to initialize the state via initializing inside the constructor, which runs before the component... but failed.
// const initializer = () => {
//   axios.get('/products/25168')
//   .then((res) => {
//     const product = res.data;
//     this.setState({ product: product });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // fetch reviews from API - Steven
// axios.get('/reviews/25168')
//   .then((res) => {
//     this.setState({ reviews: res.data });
//   })
//   .catch((err) => {
//     console.log(err);
//   })
// }