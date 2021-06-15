import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Tile from './ReviewTile';
import DownArrow from '../sharedComponents/downArrows';

const ReviewArea = styled.div`
  grid-area: ReviewList;
  min-height: auto;
  min-width: auto;
  padding: 30px;
  overflow: auto;
  max-height: 80vh;
  `;

const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: auto;
  min-width: auto;
`;

const CoralStyledButton = styled.button`
  :before {
    content: "Show More"
  };
  transition: opacity 3s ease-in-out
  position: relative;
  background-color: white;
  border-radius: 22px;
  border: 2px solid #FF5A5F;
  color: black;
  padding: 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  transition-duration: 0.4s;
  cursor: pointer;
    &:hover {
      background-color: #FF5A5F;
      color: white;
      border: 2 px solid #FF5A5F;
      border-radius: 22px;
    }
`;

const formatTile = (data) => <Tile key={data.review_id} data={data} />;

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      reviewsRendered: 2,
    };
    this.onShowMore = this.onShowMore.bind(this);
  }

  componentDidMount() {
    const { productId, totalReviews, sort } = this.props;
    axios.get(`/reviews/getReviews/${productId}/${totalReviews}/${sort}`)
      .then((data) => this.setState({ reviews: data.data }))
      .catch((err) => console.log('error: ', err));
  }

  // static getDerivedStateFromError(err) {
  //   // Update state so the next render will show the fallback UI.
  //   return { hasError: true };
  // }
  onShowMore() {
    const { reviewsRendered } = this.state;
    this.setState({ reviewsRendered: reviewsRendered + 2 });
  }

  render() {
    //
    const { reviews } = this.state;
    const { reviewsRendered } = this.state;

    let showMoreButton;
    const viewedTile = reviews.slice(0, reviewsRendered);
    if (reviews.length > 2) {
      if (reviewsRendered < reviews.length) {
        showMoreButton = (
          <VerticalContainer>
            <CoralStyledButton type="button" onClick={this.onShowMore} />
            <DownArrow />
          </VerticalContainer>
        );
      } else {
        showMoreButton = null;
      }
    }
    // const { hasError } = this.state;
    return (
      <ReviewArea>
        {viewedTile.map(formatTile)}
        <br />
        {showMoreButton}
      </ReviewArea>
    );
  }
}

export default ReviewList;
