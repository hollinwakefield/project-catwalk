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
  overflow: hidden;
  flex-direction: column;
    .relative {
      font-size: 14px;
      padding: 5px;
      font-weight: bold;
    }
`;

const RatingBreakdown = (props) => {
  const { avg, recommended } = props;
  // useEffect() {
  //   axios.get('/')
  // }
  return (
    <RatingBreakdownArea>
      <BreakdownSummary avg={avg} />
      <StarBreakdown />
      <div className="relative">
        {`${recommended} `}
        of reviews recommend this product
      </div>
    </RatingBreakdownArea>

  );
};

export default RatingBreakdown;
