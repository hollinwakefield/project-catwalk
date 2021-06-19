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
const ThumbnailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2px;
  margin-top: 30px;
  margin-right: 30px;
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

const MainImage = styled.img`
  object-fit: scale-down;
  align-self: center;
  cursor: pointer;
  overflow: hidden;
  &:hover {
    opacity: 0.8;
    cursor: zoom-in;
    // transform: scale(2);
  }
`;

// const Modal = styled.div`
//   background: rgba(0, 0, 0, 0.6);
//   position: fixed;
//   z-index: 1;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   right: 0;
// `;

// const FullImage = styled.img`
//   position: fixed;
//   height: 80%;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, 50%) scale(2);
// `;

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
        {thumbnailUrls.map((thumbnailUrl, index) => (<Thumbnail key={index} src={thumbnailUrl} alt="thumbnail" onClick={() => handleClick(index)} />))}
      </ThumbnailWrapper>
      <MainImage src={mainImage} alt="main-image" />
      {/* <Modal>
        <FullImage src={mainImage} alt="expanded-view" />
      </Modal> */}
    </ImageGalleryArea>
  );
};

export default ImageGallery;
