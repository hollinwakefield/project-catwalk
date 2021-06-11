import React from 'react';
import styled from 'styled-components';
import Card from './Card';

// Just sample data, will be removed once data from API/Database is set up
import data from './exampleData.json';

// This is the container
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  width: auto;
  border-style: solid;
  margin-left: 10vw;
  margin-right: 10vw;
  overflow: hidden;
  flex: 0 0 30%;
`;

const Title = styled.h1`
  font-size: 30px;
  margin-left: 5em;
  font-weight: bold;
  font-family: Sans-serif;
`;

const Slider = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  overflow-x: auto;
`;

// Convert CardList into a carousel
const CardList = (props) => {
  const { related } = props;
  const { image } = props;
  return (
    <div class="slider">
      <Title>Related Items!</Title>
      <Wrapper>
        {props.related.map((item) => (
          <Card
            key={item.id}
            itemName={item.name}
            category={item.category}
            price={item.default_price}
          />
        ))}
        {/* {props.image.map((item) => (
          <Card
            image={item.image} />
        ))} */}
      </Wrapper>
    </div>
  );
};
export default CardList;
