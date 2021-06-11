import React from 'react';
// import styled, { css } from 'styled-components';
import CardList from './CardList';

// Will need to have two sections, can use flex box

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoNum: 0,
      currentPhoto: 0,
    };
  }

  render() {
    const { related, styles } = this.props;
    // need the array results, inside results are objects
    // now we need the array photos
    // inside of photos are objects
    // need the key thumbnail_url
    const image = styles.results[0].photos[0].url;
    return (
      <>
        < CardList related={related} styles={styles} />
      </>
    );
  }
}

export default RelatedItems;
