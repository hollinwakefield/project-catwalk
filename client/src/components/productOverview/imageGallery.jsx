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
const MainImage = styled.img`
  align-self: stretch;
  flex: 4;
  cursor: pointer;
`;

const ThumbnailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  flex: 1;
`;

const Thumbnail = styled.img`
  border: 1px solid #ddd;
  padding: 5px;
  cursor: pointer;
`;

// //////////////// HELPER FUNCTIONS //////////////// //
// input: photos <- an array with objects containing thumbnail url
// output: an array of all thumbnail urls
const getThumbnailUrls = (photos) => photos.map((photo) => photo.thumbnail_url);

// //////////////// MAIN COMPONENT //////////////// //
const ImageGallery = (props) => {
  const { style } = props;
  const { photos } = style;
  const thumbnailUrls = getThumbnailUrls(photos);
  const [expandedView, setExpandedView] = useState(false);
  const [mainImage, setMainImage] = useState(photos[0].url);
  const handleClick = (index) => {
    setMainImage(photos[index].url);
  };

  return (
    <ImageGalleryArea>
      {photos.map((photo, index) => (<Thumbnail key={index} src={photo.thumbnail_url} alt="fitting" onClick={() => handleClick(index)} />))}
      <MainImage src={mainImage} alt="fitting" />
    </ImageGalleryArea>
  );
};

export default ImageGallery;
