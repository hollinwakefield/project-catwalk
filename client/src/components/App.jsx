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
      related: [],
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
    axios.get('/reviews/25168')
      .then((res) => {
        this.setState({ reviews: res.data });
      })
      .catch((err) => {
        console.log(err);
      })
    // fetch cart from API - Kate

    // get related data from
      axios.get('/products/25168/related')
        .then((res) => {
          this.setState({related: res.data})
        })
        .catch((err) => {
          console.log("Error: ", err);
        })
  }

  render() {
    const { reviews } = this.state;
    const { related } = this.state;
    return (
      <>
        <ProductOverview />
        <RelatedItems related = {related}/>
        <RatingAndReviews reviews={reviews} />
      </>
    );
  }
}

export default App;
