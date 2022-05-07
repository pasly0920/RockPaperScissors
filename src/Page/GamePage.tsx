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
  const [RPSScore, setRPSScore] = useState<number>(0);
  const [RPSLSScore, setRPSLSScore] = useState<number>(0);

  return (
    <RockPaperScissors>
      <ScoreBoard
        gameMode={gameMode}
        gameScore={gameMode === GameMode.RPS ? RPSScore : RPSLSScore}
      />
      {userPick === GamePickCode.DEFAULT ? <GamePick /> : <GameResult />}
    </RockPaperScissors>
  );
};

export default GamePage;

//RockPaperScissorsPage
