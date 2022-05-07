import {
  Score,
  ScoreContainer,
  ScoreHeader,
  ScoreText,
  StyledLogo,
  StyledSpecialLogo,
} from './style';
import { GameMode } from '@utils/constants';

interface Props {
  gameMode: number;
}

const ScoreBoard: React.FC<Props> = ({ gameMode }) => {
  return (
    <ScoreContainer>
      {gameMode === GameMode.RPS ? <StyledLogo /> : <StyledSpecialLogo />}
      <Score>
        <ScoreHeader>SCORE</ScoreHeader>
        <ScoreText>12</ScoreText>
      </Score>
    </ScoreContainer>
  );
};
export default ScoreBoard;
