import React, { useState } from 'react';
import styled from 'styled-components';
import ProductInfo from './ProductInfo';
import StyleSelector from './StyleSelector';
import AddToCart from './AddToCart';
import Description from './Description';
import ImageGallery from './ImageGallery';

const Grid = styled.div`
  display: grid;
  grid-template-areas: "ImageGallery ProductInfo"
                       "ImageGallery Description"
                       "ImageGallery StyleSelector"
                       "ImageGallery AddToCart";
  grid-template-columns: 5fr 2fr;
  grid-template-rows: auto auto auto auto;
  grid-gap: 3em;
  min-height: 70vh;
  padding: 2rem;
  margin: 3rem;
`;

const ProductOverview = (props) => {
  const { product, styles, cart, rating, totalReviews } = props;
  const [style, setStyle] = useState(styles.results[0]);

  return (
    <Grid>
      <ImageGallery style={style} />
      <ProductInfo product={product} style={style} rating={rating} totalReviews={totalReviews} />
      <StyleSelector styles={styles} style={style} setStyle={setStyle} />
      <AddToCart style={style} />
      <Description product={product} />
    </Grid>
  );
};

export default ProductOverview;
