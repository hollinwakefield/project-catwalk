/* eslint-disable no-tabs */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Card from './Card';

// Just sample data, will be removed once data from API/Database is set up
// import data from './exampleData.json';

// This is the container
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  width: 95%;
  z-index: 0;
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
  z-index: 1;

  &.left {
		left: 0;
		transform: translate3d(0,-50%,0) rotate(-135deg);
	}
  &.right {
		right: 0;
		transform: translate3d(0,-50%,0) rotate(45deg);
	}
  &.empty {
    right: 0;
    opacity: 0;
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
`;

let start = 0;
let end = 4;

const CardList = ({ related }) => {
  const [cards, setCards] = useState(related.slice(0, 4));
  const [styledImage, setStyledImage] = useState([]);
  const [avgRatings, setAvgRatings] = useState([]);
  let imageArray = [];
  let ratingsArray = [];

  useEffect(() => {
    const idArr = related.map((object) => object.id);
    const getRelatedInfo = idArr.map((element) => axios.get(`products/${element}/styles`));
    const getAverageRatings = idArr.map((element) => axios.get(`reviews/meta/${element}`));
    // Resolve here and store into a variable

    Promise.all(getRelatedInfo)
      .then((results) => {
        imageArray = (results.map((element) => element.data.results[0].photos[0].thumbnail_url));
        setStyledImage(imageArray);
      })
      .catch((err) => {
        console.log('Error: ', err);
      });

    Promise.all(getAverageRatings)
      .then((results) => {
        ratingsArray = (results.map((element) => element.data.avg));
        setAvgRatings(ratingsArray);
      })
      .catch((err) => {
        console.log('Error: ', err);
      });
  }, []);

  const moveRight = () => {
    setCards(related.slice(start += 1, end += 1));
  };

  const moveLeft = () => {
    setCards(related.slice(start -= 1, end -= 1));
  };
  // If(card.(length) === related.(length))
  if (cards[cards.length - 1].id === related[related.length - 1].id && !cards[0].id === related[0].id) {
    // Render without right side arrow
    return (
      <>
        <Title>Related Products!</Title>
        <Wrapper>
          <Arrow aria-label="leftArrow" className="left" onClick={moveLeft} />
          {cards.map((item, index) => (
            <Card
              key={item.id}
              id={item.id}
              ratings={avgRatings[index]}
              image={styledImage[index]}
              itemName={item.name}
              category={item.category}
              price={item.default_price}
            />
          ))}
          <Arrow className="empty" />
        </Wrapper>
      </>
    );
  }
  if (cards[0].id === related[0].id && !cards[cards.length - 1].id === related[related.length - 1].id) {
    return (
      <>
        <Title>Related Products!</Title>
        <Wrapper>
          <Arrow className="empty" />
          {cards.map((item, index) => (
            <Card
              key={item.id}
              id={item.id}
              ratings={avgRatings[index+1]}
              image={styledImage[index+1]}
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
  if (cards[cards.length - 1].id === related[related.length - 1].id && cards[0].id === related[0].id) {
    return (
      <>
        <Title>Related Products!</Title>
        <Wrapper>
          <Arrow className="empty" />
          {cards.map((item, index) => (
            <Card
              key={item.id}
              id={item.id}
              ratings={avgRatings[index+1]}
              image={styledImage[index+1]}
              itemName={item.name}
              category={item.category}
              price={item.default_price}
            />
          ))}
          <Arrow className="empty" />
        </Wrapper>
      </>
    );
  }
  // else if (card.(0) === related.(0))
  // Render without left side arrow
  // else
  // Render with both
  return (
    <>
      <Title>Related Products!</Title>
      <Wrapper>
        <Arrow className="left" onClick={moveLeft} />
        {cards.map((item, index) => (
          <Card
            key={item.id}
            id={item.id}
            ratings={avgRatings[index]}
            image={styledImage[index]}
            itemName={item.name}
            category={item.category}
            price={item.default_price}
          />
        ))}
        <Arrow data-testid="rightArrow" className="right" onClick={moveRight} />
      </Wrapper>
    </>
  );
};
export default CardList;
