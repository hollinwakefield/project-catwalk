import React from 'react';
import styled from 'styled-components';
import Card from './Card';

// Just sample data, will be removed once data from API/Database is set up
import data from './exampleData.json';

// This is the container
const Wrapper = styled.div`
  display: flex;
  flex-wrap:wrap;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 30px;
  margin-left: 5em;
  font-weight: bold;
  font-family: Sans-serif;
`;

const CardList = () => {
  return (
    <>
      <Title>Related Items!</Title>
      <Wrapper>
        {data.items.map(item => (
          <Card itemName = {item.itemName} description = {item.description} />
        ))}
      </Wrapper>
    </>
  )
};

export default CardList;
