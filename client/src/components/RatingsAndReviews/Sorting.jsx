import React from 'react';
import styled from 'styled-components';

const SortingArea = styled.div`
  grid-area: Sorting;
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
  padding-bottom: 30px;
    .relative {
      font-size: 14px;
      padding: 5px;
      font-weight: bold;
    }
    span {
      text-decoration: underline;
    }
`;

const Sorting = (props) => {
  const { totalReviews } = props;
  return (
    <SortingArea>
      {`${totalReviews} Reviews, sorted by`}
      &nbsp;
      <span>relevance</span>
    </SortingArea>
  );
};

export default Sorting;
