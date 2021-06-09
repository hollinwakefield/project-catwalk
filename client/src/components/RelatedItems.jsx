import React from 'react';
import axios from 'axios';
// import styled, { css } from 'styled-components';
import CardList from './RelatedItemsComponents/CardList';

// Will need to have two sections, can use flex box
// Top portion for Related Items
// Bottom portion for outfits

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  render() {
    return (
      <>
        <CardList />
      </>
    );
  }
}

export default RelatedItems;
