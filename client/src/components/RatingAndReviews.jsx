import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  padding: 4em;
  color: blue;
  background: papayawhip;
  font-size: 1.5em;
  text-align: center;
  border: solid;
  border-color: black;
  border-radius: 20px;
`;

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
        <StyledDiv>{placeholder}</StyledDiv>
      </>
    );
  }
}

export default RatingAndReviews;
