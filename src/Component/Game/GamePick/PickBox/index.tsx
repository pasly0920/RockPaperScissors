import { Pick } from './style';
import useGetPickSvg from '@hooks/useGetPickSVG';

interface Props {
  pick: number;
  setUserPick: React.Dispatch<React.SetStateAction<number>>;
}

const PickBox: React.FC<Props> = ({ pick, setUserPick }) => {
  return <Pick>{useGetPickSvg(pick)}</Pick>;
};

export default PickBox;
