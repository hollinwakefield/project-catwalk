import React from 'react';
import styled from 'styled-components';
import Stars from '../SharedComponents/Stars';

const Breakdown = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

    .starNumber {
      align-self: flex-start;
      margin-right: 10px;
      font-size: 3em;
    }
`;

const BreakdownSummary = (props) => {
  const { avg } = props;

  return (
    <Breakdown>
      <div className="starNumber">{avg}</div>
      <Stars className="stars" stars={avg} />
    </Breakdown>
  );
};

export default BreakdownSummary;
