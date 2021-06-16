import React from 'react';
import styled from 'styled-components';
import Stars from '../SharedComponents/Stars';

// /////////////// ASSIGNED GRID AREA //////////////// //
const ProductInfoArea = styled.div`
  grid-area: ProductInfo;
`;

// //////////////// STYLED COMPONENTS //////////////// //
const ProductName = styled.h1`
  font-size: 50px;
  font-weight: bold;
`;

const Category = styled.div`
  font-size: 25px;
  color: darkgrey;
  font-style: italic;
  text-decoration: underline;
  margin-top: 20px;
`;

const DefaultPrice = styled.span`
  font-size: 20px;
  text-decoration: ${(props) => (props.strikethrough ? 'line-through' : 'none')};
`;

const SalePrice = styled.span`
  font-size: 20px;
  color: red;
  margin-left: 10px;
`;

// //////////////// MAIN COMPONENT //////////////// //
const ProductInfo = (props) => {
  const { product, style, rating } = props;
  const { name, category } = product;
  const defaultPrice = product.default_price;
  const salePrice = style.sale_price;

  return (
    <ProductInfoArea>
      <Stars stars={rating} />
      <Category>{category}</Category>
      <ProductName>{name}</ProductName>
      {salePrice ? (
        <div>
          <DefaultPrice strikethrough>
            {`$${defaultPrice}`}
          </DefaultPrice>
          <SalePrice>
            {`$${salePrice}`}
          </SalePrice>
        </div>
      ) : (
        <div>
          <DefaultPrice>
            {`$${defaultPrice}`}
          </DefaultPrice>
        </div>
      )}
    </ProductInfoArea>
  );
};

export default ProductInfo;
