import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// /////////////// ASSIGNED GRID AREA //////////////// //
const ImageGalleryArea = styled.div`
  grid-area: ImageGallery;
  display: flex;
  align-items: flex-start;
  max-height: 70vh;
`;

// //////////////// STYLED COMPONENTS //////////////// //
const MainImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  align-self: center;
  margin-left: 30px;
  margin-right: 50px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    cursor: zoom-in;
  }
`;

const ThumbnailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2px;
  margin-top: 30px;
`;

const Thumbnail = styled.img`
  width: 50px;
  height: 65px;
  border: 2px solid #ddd;
  border-radius: 7%;
  padding: 3px;
  margin: 2px;
  cursor: pointer;
  &:hover {
    border-color: #FF5A5F;
  }
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

  useEffect(() => {
    setMainImage(photos[0].url);
  }, [style]);

  return (
    <ImageGalleryArea>
      <ThumbnailWrapper>
        {thumbnailUrls.map((thumbnailUrl, index) => (<Thumbnail key={index} src={thumbnailUrl} alt="fitting" onClick={() => handleClick(index)} />))}
      </ThumbnailWrapper>
      <MainImage src={mainImage} alt="thumbnail" />
    </ImageGalleryArea>
  );
};

export default ImageGallery;
