import React, { useState } from 'react';
import styled from 'styled-components';
import Stars from '../SharedComponents/Stars';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 250px;
  max-width: 250px;
  min-height: 500px;
  border-radius: 4px;
  border: solid 2px #767676;
  padding: 5px;
  margin: 1rem;

  &:hover {
    cursor: pointer;
  }
`;

const NotWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 250px;
  max-width: 250px;
  min-height: 300px;
  border-radius: 4px;
  border: solid 2px #767676;
  padding: 5px;
  margin: 1rem;

  &:hover {
    cursor: pointer;
  }
`;

const Name = styled.p`
  font-family: 'Montserrat'
  color: gray;
  font-size: 20px;
  font-weight: 200;
  text-align: left;
  flex-basis:0.1rem;
  margin-top: -35px;
`;

const Description = styled.p`
  color: gray;
  text-align:left;
  margin-top: -100px;

`;

const Category = styled.p`
  color: gray;
  text-align: left;
  margin-top:-20px;
`;

const Image = styled.img`
  border-radius: 5px;
  width: 250px;
  height: 250px;
  opacity: 0.2

`;

const NoImage = styled.img`
  border-radius: 5px;
`;

const Line = styled.hr`
  color: black;
  width: 100%;
  margin-top: -10px;
`;

const OutfitCard = ({
  itemName, price, image, ratings, category,
}) => {
  let images;
  let cat, name, stars, line;

  if (image === undefined) {
    return (
      <NotWrapper>
        <NoImage src="https://image.flaticon.com/icons/png/512/1894/1894671.png" />
        <Description>No Outfits in list</Description>
      </NotWrapper>
    );
  }
  return (
    <Wrapper>
      {images}
      <div>{line}</div>
      {category}
      {name}
      {cat}
      {stars}
    </Wrapper>
  );
};

export default OutfitCard;
