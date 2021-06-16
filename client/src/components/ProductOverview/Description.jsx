import React from 'react';
import styled from 'styled-components';

// //////////////// ASSIGNED GRID AREA //////////////// //
const DescriptionArea = styled.div`
  grid-area: Description;
`;

// //////////////// STYLED COMPONENTS //////////////// //
const Slogan = styled.div`
  font-style: italic;
  font-weight: bold;
  font-size: 25px;
  margin-top: -30px;
`;

const ProductDescription = styled.div`
  font-size: 15px;
  margin-top: 15px;
`;

// //////////////// MAIN COMPONENT //////////////// //
const Description = (props) => {
  const { product } = props;
  const { slogan, description } = product;

  return (
    <DescriptionArea>
      <Slogan>{slogan}</Slogan>
      <ProductDescription>{description}</ProductDescription>
    </DescriptionArea>
  );
};

export default Description;
