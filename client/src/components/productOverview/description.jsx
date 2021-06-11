import React from 'react';
import styled from 'styled-components';

const DescriptionArea = styled.div`
  grid-area: Description;
  background: palevioletred;
`;

const Description = (props) => {
  const { slogan, description } = props;
  return (
    <DescriptionArea>
      <div>{slogan}</div>
      <div>{description}</div>
    </DescriptionArea>
  );
};

export default Description;
