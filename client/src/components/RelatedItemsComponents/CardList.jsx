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

const CardList = () => (
  <>
    <Title>Related Items!</Title>
    <Wrapper>
      {data.items.map((item) => (
        <Card
          itemName={item.itemName}
          category={item.category}
          description={item.description}
          image={item.image}
          price={item.price}
          rating={item.rating}
        />
      ))}
    </Wrapper>
  </>
);

export default CardList;
