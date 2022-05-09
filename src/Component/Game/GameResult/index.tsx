interface Props {
  userPick: number;
  housePick: number;
  resetUserPick: () => void;
  setRPSScore: React.Dispatch<React.SetStateAction<number>>;
  setRPSLSScore: React.Dispatch<React.SetStateAction<number>>;
}

const GameResult: React.FC<Props> = ({
  userPick,
  housePick,
  resetUserPick,
  setRPSScore,
  setRPSLSScore,
}) => {
  return <div></div>;
};

export default GameResult;
