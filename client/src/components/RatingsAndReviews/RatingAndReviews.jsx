import React from 'react';
import styled from 'styled-components';
import ReviewList from './ReviewList';

const Box = styled.div`
  grid-area: ProductBreakdown;
  place-self: stretch;
  background: red;
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
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto auto 1fr auto;
  min-height: 50vh;
  gap: 5px 5px;
  place-items: center;
  font-size: 1.5em;
  border:solid;
  text-align: center;
  background: papayawhip;
`;

class RatingAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: 'Placeholder',
    };
  }

  render() {
    const { reviews } = this.props;
    const { placeholder } = this.state;
    return (
      <StyledDiv>
        <Box>
          <p>{placeholder}</p>
          <p>hello</p>
          <p>more stuff inside place</p>
          <div>hi</div>
        </Box>
        <ReviewList
          reviews={reviews}
        />
      </StyledDiv>
    );
  }
}

export default RatingAndReviews;
