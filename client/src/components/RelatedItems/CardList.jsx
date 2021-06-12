import React, {useState} from 'react';
import styled from 'styled-components';
import Card from './Card';


// Just sample data, will be removed once data from API/Database is set up
// import data from './exampleData.json';



// This is the container
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
`;

const Arrow = styled.div`
  position: relative;
  top: 50%;
  width: 2vmin;
  height: 2vmin;
  background: transparent;
  border-top: 1vmin solid black;
  border-right: 1vmin solid black;
  box-shadow: 0 0 0 lightgray;
  transition: all 200ms ease;
  margin-top: 250px;

  &.left {
		left: 0;
		transform: translate3d(0,-50%,0) rotate(-135deg);
	}
  &.right {
		right: 0;
		transform: translate3d(0,-50%,0) rotate(45deg);
	}
  &:hover {
		border-color: coral;
		box-shadow: 0.5vmin -0.5vmin 0 black;
    cursor: pointer;
	}
  &:before {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-40%,-60%) rotate(45deg);
		width: 200%;
		height: 200%;
	}
`

const CardList =({ related, styles }) => {
  const [Cards, setCards] = useState(related.slice(0,4));
  const length = related.length;

  const moveRight = () => {
    console.log(related);
    setCards(related.slice(1,5));
  }

  const moveLeft = () => {
    setCards(related.slice(0,4));
  }
  return (
    <>
    <Title>Related Products!</Title>
    <Wrapper>
    <Arrow className ="left" onClick={moveLeft} />
      {Cards.map((item, index) => (
        <Card
          key={item.id}
          image={styles.results[index].photos[0].url}
          rating={3.5}
          itemName={item.name}
          category={item.category}
          price={item.default_price}
        />
      ))}
      <Arrow className="right" onClick={moveRight} />
    </Wrapper>
  </>
  );
 }
export default CardList;
