import React from 'react';
import RelatedItems from './RelatedItems';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  render() {
    return (
      <>
        <h1>Hullo</h1>
        <RelatedItems />
      </>
    );
  }
}

export default App;
