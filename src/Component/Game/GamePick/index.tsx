import { GamePickContainer } from './style';
import PickBox from '@Component/Game/GamePick/PickBox';
import { GameMode, GamePickCode } from '@utils/constants';

interface Props {
  gameMode: number;
  setUserPick: React.Dispatch<React.SetStateAction<number>>;
}

const RPSGameSelect = [
  GamePickCode.ROCK,
  GamePickCode.PAPER,
  GamePickCode.SCISSOR,
];
const RPSLSGameSelect = [
  ...RPSGameSelect,
  GamePickCode.LIZARD,
  GamePickCode.SPOCK,
];

const GamePick: React.FC<Props> = ({ gameMode, setUserPick }) => {
  const GameSelect =
    gameMode === GameMode.RPS ? RPSGameSelect : RPSLSGameSelect;
  return (
    <GamePickContainer>
      {GameSelect.map((pick, idx) => (
        <PickBox pick={pick} setUserPick={setUserPick} key={idx} />
      ))}
    </GamePickContainer>
  );
};

export default GamePick;
