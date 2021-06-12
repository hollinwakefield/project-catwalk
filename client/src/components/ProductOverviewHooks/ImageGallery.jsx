import React, { useState } from 'react';
import styled from 'styled-components';

// /////////////// ASSIGNED GRID AREA //////////////// //
const ImageGalleryArea = styled.div`
  grid-area: ImageGallery;
  background: palevioletred;
`;

// //////////////// STYLED COMPONENTS //////////////// //
const StyledMainImage = styled.img`
  width: 100%;
  height: 100%;
`;

const StyledThumbnail = styled.img`
`;

const Thumbnails = styled.div`
`;

const MainImage = (props) => (
  // <StyledMainImage src={props.src} alt={props.alt}>

  // </StyledMainImage>
  <StyledMainImage src={props.src} alt={props.alt} />
);

// //////////////// MAIN COMPONENT //////////////// //
const ImageGallery = (props) => {
  const { style } = props;
  const { photos } = style;
  const [expandedView, setExpandedView] = useState(false);

  return (
    <ImageGalleryArea>
      <MainImage src={photos[0].url} alt="fitting" />
    </ImageGalleryArea>
  );
};

export default ImageGallery;
