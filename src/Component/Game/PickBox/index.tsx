import { Pick } from './style';
import useGetPickSvg from '@hooks/useGetPickSVG';

interface Props {
  pick: number;
  setUserPick: React.Dispatch<React.SetStateAction<number>> | null;
}

const PickBox: React.FC<Props> = ({ pick, setUserPick }) => {
  const userPickHandler = () => {
    setUserPick !== null && setUserPick(pick);
  };

  return <Pick onClick={userPickHandler}>{useGetPickSvg(pick)}</Pick>;
};

export default PickBox;
