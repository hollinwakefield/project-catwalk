import React from 'react';
import styled from 'styled-components';

const StyleSelectorArea = styled.div`
  grid-area: StyleSelector;
  background: palevioletred;
`;

const StyleName = styled.div`
  font-weight: bold;
`;

// input: styles <- an object with results array containing style objects
// output: thumbnails <- an array of first thumbnail urls from each style object
const getThumbnails = (styles) => {
  const { results } = styles;
  return results.map((style) => style.photos[0].thumnail_url);
};

const StyleSelector = (props) => {
  const { styles, style, setStyle } = props;
  const { name } = style;
  const thumbnails = getThumbnails(styles);

  return (
    <StyleSelectorArea>
      <StyleName>STYLE > {name}</StyleName>
      <div>Thumbnails</div>
    </StyleSelectorArea>
  );
};

export default StyleSelector;
