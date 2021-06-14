import React from 'react';
import styled from 'styled-components';

// //////////////// ASSIGNED GRID AREA //////////////// //
const StyleSelectorArea = styled.div`
  grid-area: StyleSelector;
`;

// //////////////// STYLED COMPONENTS //////////////// //
const StyleName = styled.div`
  font-size: 15px;
`;

const ThumbnailWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`;

const Thumbnail = styled.img`
  width: 50px;
  height: 50px;
  border: 2px solid #ddd;
  border-radius: 50%;
  padding: 3px;
  margin-top: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

// //////////////// HELPER FUNCTIONS //////////////// //
// input: styles <- an object with results array containing style objects
// output: an array of first thumbnail urls from each style object
const getThumbnailUrls = (styles) => {
  const { results } = styles;
  return results.map((style) => style.photos[0].thumbnail_url);
};

// //////////////// MAIN COMPONENT //////////////// //
const StyleSelector = (props) => {
  const { styles, style, setStyle } = props;
  const { name } = style;
  const thumbnailUrls = getThumbnailUrls(styles);
  const handleClick = (index) => {
    setStyle(styles.results[index]);
  };

  return (
    <StyleSelectorArea>
      <StyleName>
        Selected Style >
        {name}
      </StyleName>
      <ThumbnailWrapper>
        {thumbnailUrls.map((thumbnailUrl, index) => (<Thumbnail key={index} src={thumbnailUrl} onClick={() => handleClick(index)} />))}
      </ThumbnailWrapper>
    </StyleSelectorArea>
  );
};

export default StyleSelector;
