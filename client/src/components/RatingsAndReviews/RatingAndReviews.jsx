import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  grid-area: ProductBreakdown;
  place-self: stretch;
  background: red;
  margin: 0.5em;
  padding: 0.25em;
  text-align: center;
  font-size: 1vw;
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
  text-align: center;
  border: solid;
  background: papayawhip;
  border-color: black;
`;

class RatingAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: 'Placeholder',
    };
  }

  render() {
    const { placeholder } = this.state;
    return (
      <StyledDiv>
        <div>hihi</div>
        <div>kate</div>
        <Box>
          <p>{placeholder}</p>
        </Box>
      </StyledDiv>
    );
  }
}

export default RatingAndReviews;
