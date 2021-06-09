import React from 'react';
import styled from 'styled-components';

const AddToCartArea = styled.div`
  grid-area: AddToCart;
  background: palevioletred;
`;

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
    const { counter } = this.state;
    return (
      <AddToCartArea>Add to Cart</AddToCartArea>
    );
  }
}

export default AddToCart;
