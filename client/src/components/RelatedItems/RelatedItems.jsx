import React from 'react';
import axios from 'axios';
// import styled, { css } from 'styled-components';
import CardList from './CardList';
import helpers from '../../../../helpers/productsAPI';

// TO DO:
  // App passed down related item
  // Need to perform a get request in here to get the styles of each related item
  // Then extract the url sources from each of the syles of each related item
  // Store those urls into an array, then send it to the cardlist child

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    
  }

  render() {
    const {related, styles} = this.props;
    return (
      <>
        <CardList related={related} styles={styles}/>
      </>
    );
  }
}

export default RelatedItems;
