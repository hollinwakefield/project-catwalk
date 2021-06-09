import React from 'react';
import styled from 'styled-components';
import '@fortawesome/fontawesome-free';

// this will be for the create review form

const Star = styled.form`
  display: block;
  position: relatve;
  padding-left: 10px;

  &:input {
    background:
  }
`;

class StarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 4,
    };
  }

  render() {
    return (
      <Star>
        <label htmlFor="1star" />
        <input type="radio" id="1star" value="1" />
        <label htmlFor="2star"/>
        <input type="radio" id="2star" value="2" />

      </Star>
    );
  }
}

export default StarRating;
