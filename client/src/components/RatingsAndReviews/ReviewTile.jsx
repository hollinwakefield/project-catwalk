import React, { useState } from 'react';
import styled from 'styled-components';

const TileArea = styled.div`
  display: grid;
  grid-template-areas: "StarRating ReviewerName Date"
                       "Summary Summary Summary"
                       "Body Body Body"
                       "Response Response Response"
                       "Helpful Helpful Helpful"
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto auto auto auto;
  background: turquoise;
  border: solid;
`;

const ReviewSummary = styled.div`
  grid-area: Summary
 `;

const ReviewBody = styled.div`
  grid-area: Body
`;

const ReviewResponse = styled.div`
  grid-area: Response
`;

const Helpful = styled.div`
  grid-area: Helpful
`;

const Tile = (props) => {
  // const [productInfo, setProductInfo] = useState(props.);
  const { body, date, helpfulness, photos, rating,
    recommend, response, reviewer_name, summary } = props;

  return (
    <TileArea>
      <div>{rating}</div>
      <div>{reviewer_name}</div>
      <div>{date}</div>
      <ReviewSummary>{summary}</ReviewSummary>
      <ReviewBody>{body}</ReviewBody>
      <ReviewResponse>{response}</ReviewResponse>
      <Helpful>{recommend}</Helpful>
    </TileArea>
  );
};

export default Tile;
