import React from 'react';
import axios from 'axios';
// import styled, { css } from 'styled-components';
import CardList from './CardList';
import helpers from '../../../../helpers/productsAPI';

// Will need to have two sections, can use flex box

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const {related} = this.props;
    console.log({related});
    return (
      <>
        <CardList related={related} />
      </>
    );
  }
}

export default RelatedItems;
