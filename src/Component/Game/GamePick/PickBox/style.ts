import styled from 'styled-components';

import { ColorCode } from '@utils/constants';

export const Pick = styled.div`
  & {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 21%;
    border-radius: 50%;
    border: 25px solid transparent;
    background-image: linear-gradient(#fff, #fff),
      linear-gradient(
        to bottom,
        ${ColorCode.PAPER1} 0%,
        ${ColorCode.PAPER2} 100%
      );
    cursor: pointer;
    position: relative;
    background-origin: border-box;
    background-clip: content-box, border-box;
  }
  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;
