import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
    const { counter } = this.state;
    return (
      <>
        <div>Hullo</div>
        <div>{counter}</div>
      </>
    );
  }
}

export default App;
