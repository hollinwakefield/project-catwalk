import React from 'react';
import styled from 'styled-components';

const S = {};

S.span = styled.span`
  width: 1.0rem;
  height: 1.0rem;
`;

S.svg = styled.svg`
  display: inline-block;
  vertical-align: middle;
  margin-top: 10px;
  margin-right: 55px;
  flex-shrink: 0;
  z-index: -1;

  @keyframes pulse {
    0% {
      opacity: 1;
      transform: rotate(0.25turn)
    }
    50% {
      opacity: .8;
      transform: rotate(0.25turn) translateX(10px);
    }
    100% {
      opacity: 1;
      transform: rotate(0.25turn)
    }
  }

  animation: pulse 2s 2.5s ease-out infinite;
  opacity: 0;
`;

function DownArrow() {
  return (
    <S.svg viewBox="0 0 2000 2000"
    width="5.0rem"
    height="5.0rem"
    aria-hidden="true"
    >
      <g>
        <g id="_x35__11_">
          <g>
            <path d="M596.96,269.674L342.381,15.094c-20.079-20.079-52.644-20.079-72.723,0c-20.079,20.079-20.079,52.644,0,72.723
				L487.852,306.01L269.658,524.202c-20.079,20.079-20.079,52.644,0,72.723s52.644,20.079,72.723,0L596.96,342.346
				C617.039,322.317,617.039,289.753,596.96,269.674z M290.858,254.258L88.744,41.238c-20.309-21.378-53.204-21.378-73.513,0
				s-20.309,56.058,0,77.462l165.371,174.289L15.231,467.278c-20.309,21.379-20.309,56.083,0,77.462s53.204,21.379,73.513,0
				L290.858,331.72C311.167,310.342,311.167,275.662,290.858,254.258z"/>
          </g>
        </g>
      </g>

    </S.svg>

  );
}

export default DownArrow;
