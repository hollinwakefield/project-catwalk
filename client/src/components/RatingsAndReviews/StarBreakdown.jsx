import React from 'react';
import styled from 'styled-components';

const StarBars = styled.div`
  display: flex;
  flex-direction: column;
`;

const Bar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px;

  button {
    margin: 0;
    padding: 0;
    border: 0;
    background: 0;
    color: black;
    text-decoration: underline;
    cursor: pointer;
  };

  .emptyBar {
    background-color: #e6e6e6;
    min-height: 10px;
    flex-grow: 1;
    margin-left: 5px;
  };

  .filled {
    background-color: #404040;
    min-height: 10px;
  };

  .fiveStarPercentage {
    min-height: 10px;
    width: 50%;
  };
  .fourStarPercentage {
    min-height: 10px;
    width: 50%;
  };
  .threeStarPercentage {
    min-height: 10px;
    width: 50%;
  };
  .twoStarPercentage {
    min-height: 10px;
    width: 50%;
  };
  .oneStarPercentage {
    min-height: 10px;
    width: 50%;
  };
`;

const StarBreakdown = () => {
  const placeholder = {};

  return (
    <StarBars>
      <Bar className="link">
        <button type="button">5 stars</button>
        <div className="emptyBar">
          <div className="filled fiveStarPercentage" />
        </div>
      </Bar>
      <Bar className="link">
        <button type="button">4 stars</button>
        <div className="emptyBar">
          <div className="filled fourStarPercentage" />
        </div>
      </Bar>
      <Bar className="link">
        <button type="button">3 stars</button>
        <div className="emptyBar">
          <div className="filled threeStarPercentage" />
        </div>
      </Bar>
      <Bar className="link">
        <button type="button">2 stars</button>
        <div className="emptyBar">
          <div className="filled twoStarPercentage" />
        </div>
      </Bar>
      <Bar className="link">
        <button type="button">1 stars</button>
        <div className="emptyBar">
          <div className="filled oneStarPercentage" />
        </div>
      </Bar>
    </StarBars>
  );
};

export default StarBreakdown;
