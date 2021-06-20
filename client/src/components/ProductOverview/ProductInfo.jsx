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
  font-size: 27px;
  color: darkgrey;
  font-style: italic;
  margin-top: 20px;
`;

const RatingsWrapper = styled.div`
  display: flex;
`;

const ReviewRedirect = styled.a`
  color: darkgrey;
  margin-left: 10px;
`;

const Ratings = (props) => (
  <RatingsWrapper>
    <Stars stars={props.rating} />
    <ReviewRedirect href="#ratings-and-reviews">
      {`Read all ${props.totalReviews} reviews`}
    </ReviewRedirect>
  </RatingsWrapper>
);

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
  const { product, style, rating, totalReviews } = props;
  const { name, category } = product;
  const defaultPrice = product.default_price;
  const salePrice = style.sale_price;

  return (
    <ProductInfoArea>
      <Ratings rating={rating} totalReviews={totalReviews} />
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
