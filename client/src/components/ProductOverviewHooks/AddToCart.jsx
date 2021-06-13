import React, { useState } from 'react';
import styled from 'styled-components';

// //////////////// ASSIGNED GRID AREA //////////////// //
const AddToCartArea = styled.div`
  grid-area: AddToCart;
  background: palevioletred;
`;

// //////////////// STYLED COMPONENTS //////////////// //
const DropdownWrapper = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`;

const StyledSelect = styled.select`
  max-width: 50%;
  height: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

const StyledOption = styled.option`
  color: ${(props) => (props.notSelected ? 'lightgrey' : 'black')};
`;

const StyledButton = styled.input`
  max-width: 50%;
  height: 20%;
  display: flex;
  justify-content: center;
  border: solid 2px;
  padding: 0.5rem;
  border-radius: 1rem;
  cursor: pointer;
`;

const Dropdown = (props) => (
  <DropdownWrapper action={props.action}>
    <StyledSelect onChange={props.onChange} disabled={props.disabled}>
      {props.children}
    </StyledSelect>
  </DropdownWrapper>
);

const Option = (props) => (
  <StyledOption notSelected={props.notSelected}>
    {props.value}
  </StyledOption>
);

const Button = (props) => (
  <StyledButton type="submit" value={props.buttonText} />
);

// //////////////// HELPER FUNCTIONS //////////////// //
// input: skus <- an object with sku id as it's key and a nested object containing size and quantity
// as it's value
// output: sizes <- an array of all available sizes (quantity has to be greater than 0)
const getAvailableSizes = (skus) => {
  const sizes = Object.values(skus).filter((sku) => sku.quantity > 0).map((sku) => sku.size);
  return sizes;
};

// input: skus, size
// output: max quantity is either the remaining quantity of the selected size or 15
const getMaxQuantity = (skus, size) => {
  const maxQuantity = Object.values(skus).filter((sku) => sku.size === size)[0].quantity;
  return (maxQuantity > 15) ? 15 : maxQuantity;
};

// input: N <- maximum number
// output: an array containing 1, 2, ..., N
const getArrayOneToN = (n) => ([...Array(n).keys()].map((num) => num + 1));

// //////////////// MAIN COMPONENT //////////////// //
const AddToCart = (props) => {
  const { style } = props;
  const { skus } = style;
  const [size, setSize] = useState('SELECT SIZE');
  const [quantity, setQuantity] = useState(1);
  const sizes = getAvailableSizes(skus);
  const handleSizeSelect = (event) => {
    console.log('size before: ', size);
    setSize(event.target.value);
    console.log('event.target.value: ', event.target.value);
    console.log('size after: ', size);
  };
  const handleQuantitySelect = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <AddToCartArea>
      <Dropdown
        id="size-selector"
        onChange={handleSizeSelect}
        action="/"
      >
        <Option notSelected value="SELECT SIZE" />
        {sizes.map((size, index) => (<Option key={index} value={size} />))}
      </Dropdown>
      {(size === 'SELECT SIZE') ? (
        <Dropdown
          id="qty-selector"
          onChange={handleQuantitySelect}
          action="/"
          disabled
        >
          <Option value="1" />
        </Dropdown>
      ) : (
        <Dropdown
          id="qty-selector"
          onChange={handleQuantitySelect}
          action="/"
        >
          {getArrayOneToN(getMaxQuantity(skus, size)).map((quantity) => (<Option value={quantity} />))}
        </Dropdown>
      )}
      <Button buttonText="ADD TO BAG" />
    </AddToCartArea>
  );
};

export default AddToCart;
