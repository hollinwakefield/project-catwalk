import React from 'react';

class RatingAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: 'Placeholder',
    };
  }

  render() {
    const { placeholder } = this.state;
    return (
      <>
        <div>{placeholder}</div>
      </>
    );
  }
}

export default RatingAndReviews;
