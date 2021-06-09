import React from 'react';
import styled from 'styled-components';

const ImageGalleryArea = styled.div`
  grid-area: ImageGallery;
  background: palevioletred;
`;

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
    const { counter } = this.state;
    return (
      <ImageGalleryArea>Image Gallery</ImageGalleryArea>
    );
  }
}

export default ImageGallery;
