import React from 'react';
import styled from 'styled-components';

// //////////////// ASSIGNED GRID AREA //////////////// //
const StyleSelectorArea = styled.div`
  grid-area: StyleSelector;
  background: palevioletred;
`;

// //////////////// STYLED COMPONENTS //////////////// //
const StyleName = styled.div`
  font-weight: bold;
`;

// const ThumbnailsWrapper = styled.div`
//   display: flex;
//   flex-wrap: wrap;
// `;

const StyledThumbnail = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  cursor: pointer;
`;

// //////////////// HELPER FUNCTIONS //////////////// //
// input: styles <- an object with results array containing style objects
// output: thumbnails <- an array of first thumbnail urls from each style object
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
      <StyleName>STYLE > {name}</StyleName>
      <StyledThumbnail>
        {thumbnailUrls.map((thumbnailUrl, index) => (<Thumbnail key={index} src={thumbnailUrl} onClick={() => {handleClick(index)}} />))}
      </StyledThumbnail>
    </StyleSelectorArea>
  );
};

export default StyleSelector;
