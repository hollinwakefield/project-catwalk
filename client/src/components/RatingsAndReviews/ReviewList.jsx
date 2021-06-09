import React from 'react';
import styled from 'styled-components';

const ReviewArea = styled.div`
  grid-area: ReviewList;

  `;

const formatTile = (data) => <Tile data={data} />;
class ReviewList extends React.Component() {
  constructor(props) {
    super(props);
    this.state = 0;
  }

  render() {
    return (
      <ReviewArea>
        {this.props.SOMETHING.map(formatTile)}
      </ReviewArea>
    );
  }
}

export default ReviewList;
