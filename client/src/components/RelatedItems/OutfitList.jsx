import React, { useState } from 'react';
import styled from 'styled-components';
import OutfitCard from './OutfitCard';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  width: 95%;
`;

const OutfitList = ({itemName, price, image, ratings, category}) => {
  return (
    <Wrapper>
      <OutfitCard itemName={itemName} price={price} image={image} ratings={ratings} category={category}/>
    </Wrapper>
  );
};

export default OutfitList;
