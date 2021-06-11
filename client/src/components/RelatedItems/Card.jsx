import React from 'react';
import styled from 'styled-components';
import Stars from '../SharedComponents/Stars';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 250px;
  max-width: 250px;
  min-height: 250px;
  background-color: #eb9534;
  border-radius: 4px;

  padding: 1rem;
  margin: 1rem;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

const Name = styled.p`
  color: white;
  font-size: 20px;
  font-weight: 200;
  text-align: left;
  margin-top:-30px;
`;

const Description = styled.p`
  color: white;
  margin-top:-30px;
  font-size: 20px;
`;

const Category = styled.p`
  color: #EAE8E4;
  text-align: left;
  margin-top:-30px;
`;

const Image = styled.img`
  max-height: 100px;
  max-width: 100px;
  margin-left: 75px;
  border-radius: 5px;
`;

const Line = styled.hr`
  color: white;
  width: 100%;
`;

const Card = ({
  itemName, image, price, rating, category
}) => (
  <Wrapper data-testid="card">
    <Image src={image} alt="nothing to show" />
    <div><Line /></div>
    <Name>{itemName}</Name>
    <Category>{category}</Category>
    <Description>
      Price: $
      {price}
    </Description>
    <Stars stars={rating} />
  </Wrapper>
);

export default Card;
