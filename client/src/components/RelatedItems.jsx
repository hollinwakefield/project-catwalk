import React from 'react';
// import styled, { css } from 'styled-components';
import CardList from './RelatedItemsComponents/CardList';

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        itemName: 'Adidas Airforce Ones',
        description: 'WOW AIRFORCES',
      },
    };
  }

  render() {
    const { data } = this.state;
    return (
      <>
        <CardList data={data} />
      </>
    );
  }
}

export default RelatedItems;
