import React from 'react';
import axios from 'axios';
import ProductOverview from './ProductOvervieww/ProductOvervieww';
import RatingAndReviews from './RatingsAndReviews/RatingAndReviews';
import RelatedItems from './RelatedItems/RelatedItems';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      styles: null,
      cart: null,
      related: null,
      reviews: null,
    };
    // initializer();
  }

  componentDidMount() {
    axios.get('/products/25170')
      .then((res) => {
        this.setState({ product: res.data });
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
    // get all styles from API - Chhuong
    axios.get('products/25170/styles')
      .then((res) => {
        this.setState({ styles: res.data });
      })
      .catch((err) => {
        console.log('Error: ', err);
      });

    // get related items from API - Chhuong
    axios.get('/products/25170/related')
      .then((res) => {
        // console.log(res.data);
        this.setState({ related: res.data });
      })
      .catch((err) => {
        console.log('Error: ', err);
      });

    // fetch reviews from API - Steven
    axios.get('/reviews/25170')
      .then((res) => {
        this.setState({ reviews: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const {
      product, styles, cart, reviews, related,
    } = this.state;
    if (product && styles && cart && reviews && related) {
      return (
        <>
          <ProductOverview product={product} styles={styles} cart={cart} />
          <RelatedItems related={related} styles={styles} product={product}/>
          <RatingAndReviews reviews={reviews} />
        </>
      );
    }
    return <div>Loading...</div>;
  }
}

export default App;

// attempted to initialize the state via initializing inside the constructor,
// which runs before the component... but failed.
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
