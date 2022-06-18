import { useEffect, useState } from 'react';

import PickBox from '@Component/Game/PickBox';
import Result from './Result';
import { GameResultContainer } from './style';
import { GameResultCode } from '@utils/constants';
import getResult from '@utils/getResult';


interface Props {
  userPick: number;
  housePick: number;
  gameMode: number;
  resetPick: () => void;
}

const GameResult: React.FC<Props> = ({
  userPick,
  housePick,
  gameMode,
  resetPick,
}) => {
  const [result, setResult] = useState<number>(GameResultCode.DEFAULT);

  useEffect(() => {
    setResult(getResult(userPick, housePick, gameMode));
  }, [userPick, housePick, gameMode]);

  return (
    <GameResultContainer>
      <PickBox pick={userPick} setUserPick={null} />
      {result === GameResultCode.DEFAULT ? '' : <Result result={result} resetPick={resetPick}/>}
      <PickBox pick={housePick} setUserPick={null} />
    </GameResultContainer>
  );
};

export default GameResult;
