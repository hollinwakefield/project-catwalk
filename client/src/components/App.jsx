import React, { Suspense } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Banner from './Banner/Banner';
import ProductOverview from './ProductOverview/ProductOverview';
import LoadingSpinner from './SharedComponents/ElizabethDonatedSpinner';

const RatingAndReviews = React.lazy(() => import('./RatingsAndReviews/RatingAndReviews'));
const RelatedItems = React.lazy(() => import('./RelatedItems/RelatedItems'));

const VerticalContainer = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 25167,
      product: null,
      styles: null,
      cart: null,
      related: null,
      rating: 0,
      totalReviews: 0,
    };
    this.setRatingAndTotalRev = this.setRatingAndTotalRev.bind(this);
  }

  componentDidMount() {
    const { productId } = this.state;
    const getProduct = () => (axios.get(`/products/${productId}`));
    const getCart = () => (axios.get('/cart'));
    const getStyles = () => (axios.get(`products/${productId}/styles`));
    const getRelated = () => (axios.get(`/products/${productId}/related`));

    Promise.all([getProduct(), getCart(), getStyles(), getRelated()])
      .then((results) => {
        this.setState({
          product: results[0].data,
          cart: results[1].data,
          styles: results[2].data,
          related: results[3].data,
        });
      })
      .catch((err) => {
        console.log('Error: error getting API data');
      });
  }

  setRatingAndTotalRev(rating, totalReviews) {
    this.setState({ rating, totalReviews });
  }

  render() {
    const {
      productId, product, styles, cart, related, rating, totalReviews,
    } = this.state;
    if (product && styles && cart && related) {
      return (
        <VerticalContainer>
          <Banner />
          <ProductOverview
            product={product}
            styles={styles}
            cart={cart}
            rating={rating}
            totalReviews={totalReviews}
          />
          <Suspense fallback={<LoadingSpinner />}>
            <RelatedItems
              related={related}
              styles={styles}
              product={product}
            />
            <RatingAndReviews
              productId={productId}
              passBackAvgAndTotalReviews={this.setRatingAndTotalRev}
            />
          </Suspense>
        </VerticalContainer>
      );
    }
    return <LoadingSpinner />;
  }
}

export default App;
