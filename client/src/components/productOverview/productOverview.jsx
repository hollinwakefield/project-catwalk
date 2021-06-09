import React from 'react';
import styled from 'styled-components';
import ProductInfo from './ProductInfo';
import StyleSelector from './styleSelector';
import AddToCart from './addToCart';
import Description from './description';
import ImageGallery from './imageGallery';
import dummyData from './dummyData';

const allStyles = dummyData.styles.results;

const Grid = styled.div`
  display: grid;
  grid-template-areas: "ImageGallery ProductInfo"
                       "ImageGallery StyleSelector"
                       "ImageGallery AddToCart"
                       "Description Description";
  grid-template-columns: 5fr 2fr;
  grid-template-rows: auto auto auto auto;
  grid-gap: 1em;
  min-height: 70vh;
  padding: 1em;
  background: papayawhip;
`;

class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: allStyles[0],
    };
  }

  render() {
    const { style } = this.state;
    const avgRating = 3.5;
    const category = dummyData.product.category;
    const productName = dummyData.product.name;
    const styleName = style.name;
    const price = style.sale_price ? style.sale_price : style.original_price;

    return (
      <Grid>
        <ImageGallery />
        <ProductInfo
          avgRating={avgRating}
          category={category}
          productName={productName}
          price={price}
        />
        <StyleSelector />
        <AddToCart />
        <Description />
      </Grid>
    );
  }
}

export default ProductOverview;