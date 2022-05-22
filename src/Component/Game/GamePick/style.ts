import styled from 'styled-components';

import { ReactComponent as BackgroundTriangle } from '@assets/images/bg-triangle.svg';
import { ReactComponent as Rock } from '@assets/images/icon-rock.svg';
import { ReactComponent as Paper } from '@assets/images/icon-paper.svg';
import { ReactComponent as Scissors } from '@assets/images/icon-scissors.svg';
import { ReactComponent as Lizard } from '@assets/images/icon-lizard.svg';
import { ReactComponent as Spock } from '@assets/images/icon-spock.svg';
import { ColorCode } from '@utils/constants';

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
  background-image: url('../../../assets/images/bg-triangle.svg');
`;

export const StyledBgTrinangle = styled(BackgroundTriangle)`
  width: 100%;
`;
