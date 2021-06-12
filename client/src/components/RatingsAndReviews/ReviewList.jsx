import React from 'react';
import styled from 'styled-components';
import Tile from './ReviewTile';

const ReviewArea = styled.div`
  grid-area: ReviewList;
  min-height: auto;
  min-width: auto;
  padding: 30px;
  background: papayawhip;
  `;

const formatTile = (data) => <Tile key={data.review_id} data={data} />;

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewsRendered: 2,
    };
    this.onShowMore = this.onShowMore.bind(this);
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
    const { reviews } = this.props;
    const { results } = reviews;
    const { reviewsRendered } = this.state;

    let showMoreButton;
    const viewedTile = results.slice(0, reviewsRendered);
    if (results.length > 2) {
      if (reviewsRendered < results.length) {
        showMoreButton = (
          <button type="button" onClick={this.onShowMore}>Show More</button>
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
