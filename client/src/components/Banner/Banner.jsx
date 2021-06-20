import React from 'react';
import styled from 'styled-components';
import logo from './cat-face.jpg';

const RowContainer = styled.div`
    display: flex;
    place-self: center;
    position: relative;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const Image = styled.img`
  justify-content: center;
  max-height: 80px;
  max-width: 80px;
  padding: 10px;
`;

const Banner = () => (
  <RowContainer>
    <h2>{'Kitty '}</h2>
    <Image src={logo} alt="nothin here" aria-label="banner" />
    <h2>{' Nuggs'}</h2>
  </RowContainer>
);

export default Banner;
