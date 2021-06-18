import React from 'react';
import styled from 'styled-components';
// import styled, { css } from 'styled-components';
import CardList from './CardList';
import OutfitList from './OutfitList';

// TO DO:
// App passed down related item
// Need to perform a get request in here to get the styles of each related item
// Then extract the url sources from each of the syles of each related item
// Store those urls into an array, then send it to the cardlist child

const Wrapper = styled.div`
  margin: 3em;
  padding:2em;
`;

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: null,
    };
  }

  render() {
    const { related } = this.props;
    return (
      <Wrapper>
        <CardList related={related} />
        <OutfitList />
      </Wrapper>
    );
  }
}

export default RelatedItems;
