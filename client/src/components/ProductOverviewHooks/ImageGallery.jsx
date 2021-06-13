import React, { useState } from 'react';
import styled from 'styled-components';

// /////////////// ASSIGNED GRID AREA //////////////// //
const ImageGalleryArea = styled.div`
  grid-area: ImageGallery;
  display: flex;
  align-items: flex-start;
  background: palevioletred;
`;

// //////////////// STYLED COMPONENTS //////////////// //
const StyledMainImage = styled.img`
  align-self: stretch;
  flex: 4;
  cursor: pointer;
`;

const StyledThumbnails = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const StyledThumbnail = styled.img`
  cursor: pointer;
  border: 1px solid #ddd;
  padding: 5px;
`;

const MainImage = (props) => (
  <StyledMainImage src={props.src} alt={props.alt} />
);

const Thumbnail = (props) => (
  <StyledThumbnail src={props.src} alt={props.alt} />
);

// //////////////// MAIN COMPONENT //////////////// //
const ImageGallery = (props) => {
  const { style } = props;
  const { photos } = style;
  const [expandedView, setExpandedView] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <ImageGalleryArea>
      {photos.map((photo, index) => (<Thumbnail key={index} src={photo.thumbnail_url} alt="fitting" />))}
      <MainImage src={photos[index].url} alt="fitting" />
    </ImageGalleryArea>
  );
};

export default ImageGallery;
