import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 250px;
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
  text-align: center;
`;

const Description = styled.p`
  color: white;
  text-align: center;
`;

const Card = ({ itemName, description }) => (
  <Wrapper>
    <Name>{itemName}</Name>
    <Description>{description}</Description>
  </Wrapper>
);

export default Card;
