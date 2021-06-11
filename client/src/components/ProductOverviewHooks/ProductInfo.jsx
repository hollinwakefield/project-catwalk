import React from 'react';
import styled from 'styled-components';
import Stars from '../SharedComponents/Stars';

const ProductInfoArea = styled.div`
  grid-area: ProductInfo;
  background: palevioletred;
`;

const ProductName = styled.h1`
`;

const SalePrice = styled.span`
  color: red;
  text-decoration: line-through red;
`;

const ProductInfo = (props) => {
  const { product, style, rating } = props;
  const { name, category } = product;
  const defaultPrice = product.default_price;
  const salePrice = style.sale_price;

  return (
    <ProductInfoArea>
      <Stars stars={rating} />
      <div>{category}</div>
      <ProductName>{name}</ProductName>
      <div>
        <span>
          $
          {defaultPrice}
        </span>
        {salePrice ? (
          <SalePrice>
            $
            {salePrice}
          </SalePrice>
        ) : null}
      </div>
    </ProductInfoArea>
  );
};

export default ProductInfo;
