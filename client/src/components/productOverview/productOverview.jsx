import React from 'react';
import styled from 'styled-components';
import ProductInfo from './productInfo';
import StyleSelector from './styleSelector';
import AddToCart from './addToCart';
import Description from './description';
import ImageGallery from './imageGallery';

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
      index: 0,
    };
  }

  render() {
    const { index } = this.state;
    const { product, styles, cart } = this.props;
    const style = styles.results[index];
    const rating = 3.5;
    const { category, slogan, description } = product;
    const productName = product.name;
    const styleName = style.name;
    const price = style.sale_price ? style.sale_price : style.original_price;

    return (
      <Grid>
        <ImageGallery styles={styles} styleNo={index} />
        <ProductInfo
          rating={rating}
          category={category}
          productName={productName}
          price={price}
        />
        <StyleSelector />
        <AddToCart />
        <Description
          slogan={slogan}
          description={description}
        />
      </Grid>
    );
  }
}

export default ProductOverview;
