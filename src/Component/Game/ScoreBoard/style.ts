import styled from 'styled-components';

import { ReactComponent as LogoIcon } from '@assets/images/logo.svg';
import { ReactComponent as SpecialLogoIcon } from '@assets/images/logo-bonus.svg';
import { ColorCode, FontSize } from '@utils/constants';

export const ScoreContainer = styled.div`
  width: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  outline: solid ${ColorCode.OUTLINE};
  border-radius: 10px;
`;

export const Score = styled.div`
  width: 20%;
  margin: 2.5%;
  background-color: ${ColorCode.WHITE};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ScoreHeader = styled.span`
  font-weight: 600;
  padding: 13% 0 3% 0;
  font-size: ${FontSize.TINY};
  color: ${ColorCode.SCORE};
  text-align: center;
`;

export const ScoreText = styled.span`
  font-weight: 700;
  font-size: ${FontSize.LARGE};
  color: ${ColorCode.DARK};
  text-align: center;
  letter-spacing: -5px;
  margin-left: -3px;
  padding-bottom: 3%;
  margin-bottom: 5%;
`;

export const StyledLogo = styled(LogoIcon)`
  margin-left: 3%;
  cursor: pointer;
`;

export const StyledSpecialLogo = styled(SpecialLogoIcon)`
  margin-left: 3%;
  cursor: pointer;
`;
