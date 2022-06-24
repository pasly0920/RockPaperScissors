import styled from "styled-components";

import { GameMode } from "@utils/constants";

interface PickContainerProps {
  gameMode: number;
}

export const GamePickContainer = styled.div<PickContainerProps>`
  margin-top: 3%;
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10%;
  background-image: ${({ gameMode }) =>
    gameMode === GameMode.RPS
      ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='305' height='277'%3E%3Cpath fill='none' stroke='%23000' stroke-width='15' d='M291.5 7.5H4.574c3.119 0 52.416 84.667 147.892 254L291.5 7.5z' opacity='.2'/%3E%3C/svg%3E")`
      : `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='329' height='313'%3E%3Cpath fill='none' stroke='%23000' stroke-width='15' d='M164.5 9.27L9.26 122.06l59.296 182.495h191.888L319.74 122.06 164.5 9.271z' opacity='.2'/%3E%3C/svg%3E")`};
  background-repeat: no-repeat;
  background-position: center 100%;
  background-size: 50% 80%;
`;
