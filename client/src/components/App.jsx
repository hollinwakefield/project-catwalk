import React from 'react';
import ProductOverview from './productOverview/productOverview';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
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
