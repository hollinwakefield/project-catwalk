import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ReviewList from './ReviewList';
import RatingBreakdown from './RatingBreakdown';

const Box = styled.div`
  grid-area: ProductBreakdown;
  place-self: stretch;
  margin: 0.5em;
  padding: 0.25em;
  text-align: center;
  font-size: 1vw;
      &:hover {
        opacity: 0.5;
        cursor: grab;
      }
  `;

const StyledDiv = styled.div`
  display: grid;
  grid-template-areas: "RatingBreakdown Sorting"
                       "RatingBreakdown ReviewList"
                       "ProductBreakdown ReviewList"
                       "CreateReview ReviewList";
  grid-template-columns: minmax(0px, 1fr) minmax(0px, 3fr);
  grid-template-rows: auto auto minmax(0px, 1fr) auto;
  min-height: 100vh;
  gap: 5px 5px;
  place-items: center;
  font-size: 1.5em;
  border:solid;
  text-align: center;
`;

class RatingAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avg: 0,
      totalReviews: 0,
      recommended: '',
    };
  }

  componentDidMount() {
    // axios.get(`/reviews/meta/${this.props.productId}`)
    axios.get('/reviews/meta/25167')
      .then((res) => {
        const { data } = res;
        this.setState({
          avg: data.avg,
          totalReviews: data.reviews,
          recommended: data.recommended,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { reviews } = this.props;
    const { avg, totalReviews, recommended } = this.state;

    return (
      <>
        <h4>Ratings and Reviews!</h4>
        <StyledDiv>
          <RatingBreakdown
            avg={avg}
            totalReviews={totalReviews}
            recommended={recommended}
          />
          <ReviewList
            reviews={reviews}
            totalReviews={totalReviews}
          />
        </StyledDiv>
      </>
    );
  }
}

export default RatingAndReviews;
