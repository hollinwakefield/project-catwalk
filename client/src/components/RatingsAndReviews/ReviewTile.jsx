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

const Tile = (props) => {
  const [productInfo, setProductInfo] = useState(props.);

  return (
    <TileArea>
      {FILL_OUT_THE_PROPS_HOW_TO_USE_FOR_HOOKS}
    </TileArea>
  );
}

export default Tile;
