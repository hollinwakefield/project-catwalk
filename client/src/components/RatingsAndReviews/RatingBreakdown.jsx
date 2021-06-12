import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import StarBreakdown from './StarBreakdown';
import BreakdownSummary from './BreakdownSummary';

//Contains a Rating Summary
//Contains % of people who recommended product
//Contains a Rating Star Breakdown

const RatingBreakdownArea = styled.div`
  grid-area: RatingBreakdown;
  display: flex;
  flex-direction: column;
`;

const RatingBreakdown = (props) => {
  const { avg } = props;
  const [filterOneStars, setFilterOneStars] = useState(false);
  const [filterTwoStars, setFilterTwoStars] = useState(false);
  const [filterThreeStars, setFilterThreeStars] = useState(false);
  const [filterFourStars, setFilterFourStars] = useState(false);
  const [filterFiveStars, setFilterFiveStars] = useState(false);
  const [recommended, setRecommended] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);

  // useEffect() {
  //   axios.get('/')
  // }
  return (
    <RatingBreakdownArea>
      <BreakdownSummary avg={avg} />
      <StarBreakdown />
    </RatingBreakdownArea>
  );
};

export default RatingBreakdown;
