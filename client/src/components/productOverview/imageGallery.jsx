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
      expanded: false,
      index: 0,
    };
  }

  render() {
    const { expanded, index } = this.state;
    const { styles, styleNo } = this.props;
    const { results } = styles;
    return (
      <ImageGalleryArea>
        <img src={results[styleNo].photos[index].thumbnail_url} alt="No image to load"/>
      </ImageGalleryArea>
    );
  }
}

export default ImageGallery;
