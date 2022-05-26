import { Pick } from './style';
import useGetPickSvg from '@hooks/useGetPickSVG';

interface Props {
  pick: number;
  setUserPick: React.Dispatch<React.SetStateAction<number>>;
}

const PickBox: React.FC<Props> = ({ pick, setUserPick }) => {
  const userPickHandler = () => {
    setUserPick(pick);
  };

  return <Pick onClick={userPickHandler}>{useGetPickSvg(pick)}</Pick>;
};

export default PickBox;
