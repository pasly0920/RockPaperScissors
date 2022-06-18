import styled from "styled-components";

import { FontSize, ColorCode } from "@utils/constants";

export const ResultTextContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ResultText = styled.span`
  font-size: ${FontSize.LARGE};
  color: ${ColorCode.WHITE};
`;

export const AgainContainer = styled.div`
  margin-top: 10%;
  width: 80%;

  border-radius: 10px;
  background-color: ${ColorCode.WHITE};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const AgainText = styled.span`
  font-size: ${FontSize.MEDIUM};
  color: ${ColorCode.BACKGROUND2};
  margin-top: 5%;
  margin-bottom: 5%;
`;
