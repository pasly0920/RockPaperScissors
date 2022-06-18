import PickBox from '@Component/Game/PickBox'

interface Props {
  userPick: number;
  housePick: number;
  resetPick: () => void;
}

const GameResult: React.FC<Props> = ({
  userPick,
  housePick,
  resetPick,
}) => {
  return <div></div>;
};

export default GameResult;
