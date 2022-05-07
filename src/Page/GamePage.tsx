import { useState } from 'react';
import styled from 'styled-components';

import GameResult from '@Component/GameResult';
import GamePick from '@Component/GamePick';
import ScoreBoard from '@Component/ScoreBoard';
import { GamePickCode, GameMode } from '@utils/constants';

const RockPaperScissors = styled.div`
  width: 70%;
  margin: 3% auto;
`;

const GamePage: React.FC = () => {
  const [gameMode, setGameMode] = useState<number>(GameMode.RPS);
  const [userPick, setUserpick] = useState<number>(GamePickCode.DEFAULT);

  return (
    <RockPaperScissors>
      <ScoreBoard />
      {userPick === GamePickCode.DEFAULT ? <GamePick /> : <GameResult />}
    </RockPaperScissors>
  );
};

export default GamePage;

//RockPaperScissorsPage
