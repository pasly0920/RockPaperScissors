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
  gameScore: number;
}

const ScoreBoard: React.FC<Props> = ({ gameMode, gameScore }) => {
  return (
    <ScoreContainer>
      {gameMode === GameMode.RPS ? <StyledLogo /> : <StyledSpecialLogo />}
      <Score>
        <ScoreHeader>SCORE</ScoreHeader>
        <ScoreText>{gameScore}</ScoreText>
      </Score>
    </ScoreContainer>
  );
};
export default ScoreBoard;
