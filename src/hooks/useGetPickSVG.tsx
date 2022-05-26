import { ReactComponent as Rock } from '@assets/images/icon-rock.svg';
import { ReactComponent as Paper } from '@assets/images/icon-paper.svg';
import { ReactComponent as Scissors } from '@assets/images/icon-scissors.svg';
import { ReactComponent as Lizard } from '@assets/images/icon-lizard.svg';
import { ReactComponent as Spock } from '@assets/images/icon-spock.svg';
import { GamePickCode } from '@utils/constants';

const useGetPickSVG: React.FC<number> = (pick) => {
  switch (pick) {
    case GamePickCode.ROCK:
      return <Rock />;
    case GamePickCode.PAPER:
      return <Paper />;
    case GamePickCode.SCISSOR:
      return <Scissors />;
    case GamePickCode.LIZARD:
      return <Lizard />;
    case GamePickCode.SPOCK:
      return <Spock />;
    default:
      return <></>;
  }
};

export default useGetPickSVG;
