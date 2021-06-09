import React from 'react';
import styled from 'styled-components';

const ProductInfoArea = styled.div`
  grid-area: ProductInfo;
  background: palevioletred;
`;

const ProductInfo = (props) => {
 const { avgRating, category, productName, price } = props;

 return(
   <ProductInfoArea>
    <div>{avgRating}</div>
    <div>{category}</div>
    <div>{productName}</div>
    <div>{price}</div>
   </ProductInfoArea>
 );
};

export default ProductInfo;
