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
  const [productInfo, setProductInfo] = useState(props.);

  return (
    <TileArea>
      <div>{props.STARS}</div>
      <div>{props.USERNAME}</div>
      <div>{props.DATE}</div>
      <ReviewSummary>{props.SUMMARY}</ReviewSummary>
      <ReviewBody>{props.BODY}</ReviewBody>
      <ReviewResponse>{props.RESPONSE}</ReviewResponse>
      <Helpful>{props.HELPFUL}</Helpful>
    </TileArea>
  );
}

export default Tile;
