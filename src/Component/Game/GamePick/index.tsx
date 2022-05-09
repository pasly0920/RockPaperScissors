import { GamePickContainer, StyledBgTrinangle, PickBox } from './style';
import { ReactComponent as Rock } from '@assets/images/icon-rock.svg';
import { ReactComponent as Paper } from '@assets/images/icon-paper.svg';
import { ReactComponent as Scissors } from '@assets/images/icon-scissors.svg';

interface Props {
  gameMode: number;
  setUserPick: React.Dispatch<React.SetStateAction<number>>;
}

const GamePick: React.FC<Props> = ({ gameMode, setUserPick }) => {
  return (
    <GamePickContainer>
      <PickBox>
        <Rock />
      </PickBox>
      <PickBox>
        <Scissors />
      </PickBox>
      <PickBox>
        <Paper />
      </PickBox>
    </GamePickContainer>
  );
};

export default GamePick;
