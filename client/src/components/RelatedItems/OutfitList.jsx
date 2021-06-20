import React, { useState } from 'react';
import styled from 'styled-components';
import OutfitCard from './OutfitCard';

const Wrapper = styled.div`
  display: flex;
  justify-content: Center;
  text-align: center;
  width: 95%;
`;

const OutfitList = ({itemName}) => {
  return (
    <Wrapper>
      <OutfitCard itemName={itemName} />
    </Wrapper>
  );
};

export default OutfitList;
