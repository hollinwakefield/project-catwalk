import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import StarBreakdown from './StarBreakdown';

//Contains a Rating Summary
//Contains % of people who recommended product
//Contains a Rating Star Breakdown

const RatingBreakdownArea = styled.div`
  grid-area: RatingBreakdown;
  display: flex;
  flex-direction: column;
`;

const RatingBreakdown = () => {
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
      <div className="summary">
        Stuff inside this div
      </div>
      <StarBreakdown />
    </RatingBreakdownArea>
  );
};

export default RatingBreakdown;
