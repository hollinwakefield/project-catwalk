import React from 'react';
import styled from 'styled-components';

// //////////////// ASSIGNED GRID AREA //////////////// //
const DescriptionArea = styled.div`
  grid-area: Description;
  background: palevioletred;
`;

// //////////////// STYLED COMPONENTS //////////////// //
const Slogan = styled.div`
  font-style: italic;
  font-weight: bold;
  font-size: x-large;
`;

// //////////////// MAIN COMPONENT //////////////// //
const Description = (props) => {
  const { product } = props;
  const { slogan, description } = product;

  return (
    <DescriptionArea>
      <Slogan>{slogan}</Slogan>
      <div>{description}</div>
    </DescriptionArea>
  );
};

export default Description;
