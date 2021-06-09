import React from 'react';
import styled from 'styled-components';

const StyleSelectorArea = styled.div`
  grid-area: StyleSelector;
  background: palevioletred;
`;

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  render() {
    const { styleName } = this.props;
    return (
      <StyleSelectorArea>
        <div>{styleName}</div>
        <div>Thumbnails</div>
      </StyleSelectorArea>
    );
  }
}

export default StyleSelector;
