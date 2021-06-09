import React from 'react';
import axios from 'axios';
import ProductOverview from './productOverview/productOverview';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    console.log('App mounted');
    axios.get('/:productId')
      .then((res) => {
        console.log(res.data);
        const { productInfo } = res.data;
        this.setState({ product: productInfo });
        // console.log('this.state.product: ', this.state.product);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <>
        <ProductOverview />
      </>
    );
  }
}

export default App;
