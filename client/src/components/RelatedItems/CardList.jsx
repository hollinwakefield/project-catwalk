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
  width: auto;
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

const RightAr = styled.div`
    font-size: 0;
    line-height: 0;
    top: 50%;
    width: 20px;
    height: 20px;
    cursor: pointer;
    color: transparent;
    border: none;
    outline: 0;
    background: 0 0;

  &::before {
    content: ">" !important;
    font-size: 40px;
    line-height: 1;
    color: black;
    background:none;
    width: 32px;
    height: 32px;
   }
`

const LeftAr = styled.div`
    font-size: 0;
    line-height: 0;
    top: 50%;
    width: 20px;
    height: 20px;
    cursor: pointer;
    color: transparent;
    border: none;
    outline: 0;
    background: 0 0;
  &::before {
    content: "<" !important;
    font-size: 40px;
    line-height: 1;
    color: black;
    background:none;
    width: 32px;
    height: 32px;
   }
`

// Convert CardList into a carousel
// Cardlist will need a state...
// const CardList = (props) => {
//   const { related } = props;
//   const { styles } = props;
//   console.log("What's inside of styles: ", styles);
//   console.log(related);
//   return (
//     <div className="slider">
//       <Title>Related Products!</Title>
//       <Wrapper>
//         {props.related.map((item, index) => (
//           <Card
//             key={item.id}
//             image={styles.results[index].photos[0].url}
//             rating={3.5}
//             itemName={item.name}
//             category={item.category}
//             price={item.default_price}
//           />
//         ))}
//       </Wrapper>
//     </div>
//   );
// };

const CardList =({ related, styles }) => {
  const [currentCards, setCards] = useState(0);
  const length = related.length;

  const moveRight = () => {
    setCards(currentCards === length -1 ? 0: currentCards + 1);
  }

  const moveLeft = () => {
    setCards(currentCards === 0 ? length - 1 : currentCards -1);
  }
  return (
    <div className="slider">
    <Title>Related Products!</Title>
    <Wrapper>
    <LeftAr onClick={moveLeft} />
      {related.map((item, index) => (
        <Card
          key={item.id}
          image={styles.results[index].photos[0].url}
          rating={3.5}
          itemName={item.name}
          category={item.category}
          price={item.default_price}
        />
      ))}
      <RightAr onClick={moveRight} />
    </Wrapper>
  </div>
  );
 }
export default CardList;
