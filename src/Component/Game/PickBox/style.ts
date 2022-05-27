import styled from 'styled-components';

import { ColorCode, GamePickCode } from '@utils/constants';

const handlePickEdgeColor = (pick: number) => {
  switch (pick) {
    case GamePickCode.ROCK:
      return `${ColorCode.ROCK1} 0%, ${ColorCode.ROCK2} 100%`;
    case GamePickCode.PAPER:
      return `${ColorCode.PAPER1} 0%, ${ColorCode.PAPER2} 100%`;
    case GamePickCode.SCISSOR:
      return `${ColorCode.SCISSORS1} 0%, ${ColorCode.SCISSORS2} 100%`;
    case GamePickCode.LIZARD:
      return `${ColorCode.LIZARD1} 0%, ${ColorCode.LIZARD2} 100%`;
    case GamePickCode.SPOCK:
      return `${ColorCode.SPOCK1} 0%, ${ColorCode.SPOCK2} 100%`;
  }
};

export const Pick = styled.div<{ pick: number }>`
  & {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 21%;
    border-radius: 50%;
    border: 25px solid transparent;
    background-image: linear-gradient(#fff, #fff),
      linear-gradient(to bottom, ${({ pick }) => handlePickEdgeColor(pick)});
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
