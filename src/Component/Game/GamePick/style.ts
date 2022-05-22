import styled from 'styled-components';

import { ReactComponent as BackgroundTriangle } from '@assets/images/bg-triangle.svg';

export const GamePickContainer = styled.div`
  margin-top: 3%;
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10%;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='305' height='277'%3E%3Cpath fill='none' stroke='%23000' stroke-width='15' d='M291.5 7.5H4.574c3.119 0 52.416 84.667 147.892 254L291.5 7.5z' opacity='.2'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center 100%;
  background-size: 50% 80%;
`;

export const StyledBgTrinangle = styled(BackgroundTriangle)`
  width: 100%;
`;
