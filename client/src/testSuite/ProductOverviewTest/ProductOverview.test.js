/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
// import App from '../../components/App';
import ProductOverview from '../../components/ProductOverview/ProductOverview';
import ImageGallery from '../../components/ProductOverview/ImageGallery';
import ProductInfo from '../../components/ProductOverview/ProductInfo';
import StyleSelector from '../../components/ProductOverview/StyleSelector';
import AddToCart from '../../components/ProductOverview/AddToCart';
import Description from '../../components/ProductOverview/Description';
import dummyData from './dummyData';

const { product, styles, cart } = dummyData;
let style = styles.results[0];
const setStyle = (newStyle) => {
  style = newStyle;
};

// 0. App
// describe('App', () => {
//   test('renders App component', () => {
//     render(<App />);
//   });
// });

// 1. ProductOverview
describe('ProductOverview', () => {
  test('renders ProductOverview component', () => {
    render(<ProductOverview product={product} styles={styles} cart={cart} />);
  });
});

// 2. ImageGallery
describe('ImageGallery', () => {
  test('renders ImageGallery component', () => {
    render(<ImageGallery style={style} />);
  });
});

// 3. ProductInfo
describe('ProductInfo', () => {
  test('renders ProductInfo component', () => {
    render(<ProductInfo product={product} style={style} rating={3.5} />);
  });
});

// 4. StyleSelector
describe('StyleSelector', () => {
  test('renders StyleSelector component', () => {
    render(<StyleSelector styles={styles} style={style} setStyle={setStyle} />);
  });
});

// 5. AddToCart
describe('AddToCart', () => {
  test('renders AddToCart component', () => {
    render(<AddToCart style={style} />);
  });
});

// 6. Description
describe('Description', () => {
  test('renders Description component', () => {
    render(<Description product={product} />);
  });
});
