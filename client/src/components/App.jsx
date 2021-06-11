import React from 'react';
import axios from 'axios';
import ProductOverview from './productOverview/productOverview';
import RatingAndReviews from './RatingsAndReviews/RatingAndReviews';
import RelatedItems from './RelatedItems/RelatedItems';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      reviews: null,
      cart: [],
      related: null,
      styles: null,
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

    // get styles

    // fetch reviews from API - Steven
    axios.get('/reviews/25170')
      .then((res) => {
        this.setState({ reviews: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
    // fetch cart from API - Kate+

    // get related data from
    axios.get('/products/25170/related')
      .then((res) => {
        // console.log(res.data);
        this.setState({ related: res.data });
      })
      .catch((err) => {
        console.log('Error: ', err);
      });

    axios.get('products/25170/styles')
      .then((res) => {
        this.setState({ styles: res.data });
      })
      .catch((err) => {
        console.log('Error: ', err);
      });
  }

  render() {
    const {
      reviews, related, product, styles,
    } = this.state;
    if (product && reviews && related) {
      return (
        <>
          <ProductOverview />
          <RelatedItems related={related} styles={styles} />
          <RatingAndReviews reviews={reviews} />
        </>
      );
    }
    return (<div>Loading...</div>);

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