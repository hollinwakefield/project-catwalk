import React from 'react';
import styled from 'styled-components';

const S = {};

S.span = styled.span`
  width: 1.0rem;
  height: 1.0rem;
`;

S.svg = styled.svg`
  /* display: inline-block;
  vertical-align: middle; */
  flex-shrink: 0;
`;

const Wrapper = styled.div`
  display: flex;
  color: #d3d3d3;
  transition-duration: 1s forwards;
  & > svg:hover ~ svg {
    color: #d3d3d3;
  }

  &:hover {
    color: #FF5A5F;
  }
`;
function IconStar() {
  return (
    <S.svg
      viewBox="0 0 2000 2000"
      width="1.0rem"
      height="1.0rem"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M1178.333,436.669c585.21,0,675.797,276.558,201.763,620.964c180.84,556.568-54.19,728.182-528.223,383.777c-473.445,343.978-709.288,173.483-528.223-383.777C-149.796,713.656-60.525,436.669,525.412,436.669
        C706.252-119.898,997.268-120.59,1178.333,436.669z"
      />
    </S.svg>
  );
}

const StarWrapper = () => {
  return (
    <Wrapper>
      <IconStar />
      <IconStar />
      <IconStar />
      <IconStar />
      <IconStar />
    </Wrapper>
  )
};
export default StarWrapper;
