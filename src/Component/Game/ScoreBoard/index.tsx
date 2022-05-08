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
  setGameMode: React.Dispatch<React.SetStateAction<number>>;
}

const ScoreBoard: React.FC<Props> = ({ gameMode, gameScore, setGameMode }) => {
  return (
    <ScoreContainer>
      {gameMode === GameMode.RPS ? (
        <StyledLogo onClick={setGameMode} />
      ) : (
        <StyledSpecialLogo onClick={setGameMode} />
      )}
      <Score>
        <ScoreHeader>SCORE</ScoreHeader>
        <ScoreText>{gameScore}</ScoreText>
      </Score>
    </ScoreContainer>
  );
};
export default ScoreBoard;
