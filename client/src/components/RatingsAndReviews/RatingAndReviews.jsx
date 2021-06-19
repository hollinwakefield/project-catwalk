import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ReviewList from './ReviewList';
import RatingBreakdown from './RatingBreakdown';
import LoadingSpinner from '../SharedComponents/ElizabethDonatedSpinner';
import WriteReview from './WriteReview';

const StyledDiv = styled.div`
  display: grid;
  grid-template-areas: "RatingBreakdown Sorting"
                       "RatingBreakdown ReviewList"
                       "ProductBreakdown ReviewList"
                       "CreateReview ReviewList";
  grid-template-columns: minmax(0px, 1fr) minmax(0px, 3fr);
  grid-template-rows: auto auto minmax(0px, 1fr) auto;
  min-height: 80vh;
  gap: 3em;
  margin: 3rem;
  padding: 2rem;
  place-items: center;
  font-size: 1.5em;
  text-align: center;
`;

class RatingAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      avg: 0,
      totalReviews: 2,
      recommended: '',
      productId: 25167,
      sort: '',
      characteristics: {},
    };
  }

  componentDidMount() {
    // axios.get(`/reviews/meta/${this.props.productId}`)
    axios.get('/reviews/meta/25167')
      .then((res) => {
        const { data } = res;
        this.setState({
          loaded: true,
          avg: data.avg,
          totalReviews: data.reviews,
          recommended: data.recommended,
          characteristics: data.characteristics,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  

  render() {
    // const { reviews } = this.props;
    let quickReviewList;
    const {
      loaded, avg, totalReviews, recommended, productId, sort, characteristics,
    } = this.state;
    if (!loaded) {
      quickReviewList = (
        <LoadingSpinner />
      );
    } else {
      quickReviewList = (
        <ReviewList
          totalReviews={totalReviews}
          productId={productId}
          sort={sort}
        />
      );
    }
    return (
      <>
        <h4>Ratings and Reviews!</h4>
        <StyledDiv>
          <RatingBreakdown
            avg={avg}
            totalReviews={totalReviews}
            recommended={recommended}
          />
          {quickReviewList}
          <WriteReview characteristics={characteristics} />
        </StyledDiv>
      </>
    );
  }
}

export default RatingAndReviews;
