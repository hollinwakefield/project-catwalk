import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// //////////////// ASSIGNED GRID AREA //////////////// //
const AddToCartArea = styled.div`
  grid-area: AddToCart;
`;

// //////////////// STYLED COMPONENTS //////////////// //
const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

const StyledSelect = styled.select`
  max-width: 100%;
  padding: 0.5rem;
  border-radius: 0.5em;
  margin-bottom: 1rem;
  cursor: pointer;
`;

const StyledOption = styled.option`
  color: ${(props) => (props.notSelected ? 'lightgrey' : 'black')};
`;

const Button = styled.button`
  max-width: 100%;
  height: 25%;
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  color: white;
  background-color: #FF5A5F;
  border: 2px solid #FF5A5F;
  border-radius: 7px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

const Dropdown = (props) => (
  <form>
    <StyledSelect onChange={props.onChange} disabled={props.disabled}>
      {props.children}
    </StyledSelect>
  </form>
);

const Option = (props) => (
  <StyledOption notSelected={props.notSelected}>
    {props.value}
  </StyledOption>
);

// const Button = (props) => (
//   <form action={props.action}>
//     <StyledButton type="submit" value={props.buttonText} />
//   </form>
// );

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
const getArrayOneToN = (n) => [...Array(n).keys()].map((num) => num + 1);

// input: style, size
// output: sku id
const getSkuId = (skus, size) => Object.keys(skus).find((key) => skus[key].size === size);

// //////////////// MAIN COMPONENT //////////////// //
const AddToCart = (props) => {
  const { style } = props;
  const { skus } = style;
  const [size, setSize] = useState('SELECT SIZE');
  const [quantity, setQuantity] = useState(1);
  const sizes = getAvailableSizes(skus);
  const handleSizeSelect = (event) => {
    setSize(event.target.value);
  };
  const handleQuantitySelect = (event) => {
    setQuantity(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('BUTTON CLICKED');
    console.log(getSkuId(skus, size));
    // axios.post('/cart', {
    //   sku_id: getSkuId(skus, size),
    //   count: quantity,
    // })
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <AddToCartArea>
      <DropdownWrapper>
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
      </DropdownWrapper>
      <Button onClick={handleSubmit}>ADD TO BAG</Button>
    </AddToCartArea>
  );
};

export default AddToCart;
