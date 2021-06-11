import React from 'react';
import styled from 'styled-components';
import Stars from '../SharedComponents/Stars';

const ProductInfoArea = styled.div`
  grid-area: ProductInfo;
  background: palevioletred;
`;

const Title = styled.h1`
`;

const ProductInfo = (props) => {
  const {
    rating,
    category,
    productName,
    price
  } = props;

  return(
    <ProductInfoArea>
      <Stars stars={rating} />
      <div>{category}</div>
      <Title>{productName}</Title>
      <div>
        $
        {price}
      </div>
    </ProductInfoArea>
  );
};

export default ProductInfo;
