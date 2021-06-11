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
  const { styles } = props;
  return (
    <div class="slider">
      <Title>Related Items!</Title>
      <Wrapper>
        {props.related.map((item, index) => (
          <Card
            key={item.id}
            image={styles.results[index].photos[0].url}
            rating={3.5}
            itemName={item.name}
            category={item.category}
            price={item.default_price}
          />
        ))}
      </Wrapper>
    </div>
  );
};
export default CardList;
