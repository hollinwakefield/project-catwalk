import React, { useState } from 'react';
import styled from 'styled-components';

const AddToCartArea = styled.div`
  grid-area: AddToCart;
  background: palevioletred;
`;

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
  height: 100%;
  display: flex;
  justify-content: center;
  border: solid 2px;
  padding: 0.5rem;
  border-radius: 1rem;
`;

const Dropdown = (props) => (
  <DropdownWrapper action={props.action}>
    <StyledSelect id="size" name="size">
      {props.children}
    </StyledSelect>
    <StyledButton type="submit" value={props.buttonText} />
  </DropdownWrapper>
);

const Option = (props) => (
  <StyledOption notSelected={props.notSelected}>
    {props.value}
  </StyledOption>
);

const AddToCart = () => {
  const [optionValue, setOptionValue] = useState('');
  const handleSelect = (event) => {
    setOptionValue(event.target.value);
    console.log('optionValue: ', optionValue);
  };

  return (
    <AddToCartArea>
      <Dropdown
        buttonText="ADD TO BAG"
        onChange={handleSelect}
        action="/"
      >
        <Option notSelected value="SELECT SIZE" />
        <Option value="XS" />
        <Option value="S" />
        <Option value="M" />
        <Option value="L" />
        <Option value="XL" />
      </Dropdown>
      <Dropdown
        buttonText="ADD TO BAG"
        onChange={handleSelect}
        action="/"
      >
        <Option notSelected value="1" />
        <Option value="2" />
        <Option value="3" />
        <Option value="4" />
        <Option value="5" />
      </Dropdown>
    </AddToCartArea>
  );
};

export default AddToCart;
