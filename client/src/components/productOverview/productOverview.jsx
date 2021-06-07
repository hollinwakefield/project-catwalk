import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

class ProductOverView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: 'Placeholder',
    };
  }

  render() {
    return (
      <Wrapper>
        <Title>
          Hello World!
        </Title>
      </Wrapper>
    );
  }
}

export default ProductOverView;
