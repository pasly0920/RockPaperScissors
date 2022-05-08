import { useState } from 'react';
import styled from 'styled-components';

import GameResult from '@Component/Game/GameResult';
import GamePick from '@Component/Game/GamePick';
import ScoreBoard from '@Component/Game/ScoreBoard';
import { GamePickCode, GameMode } from '@utils/constants';

const RockPaperScissors = styled.div`
  width: 70%;
  margin: 3% auto;
`;

const Game: React.FC = () => {
  const [gameMode, setGameMode] = useState<number>(GameMode.RPS);
  const [userPick, setUserpick] = useState<number>(GamePickCode.DEFAULT);
  const [housePick, setHousePick] = useState<number>(GamePickCode.DEFAULT);
  const [RPSScore, setRPSScore] = useState<number>(0);
  const [RPSLSScore, setRPSLSScore] = useState<number>(0);

  const handleGameMode = () => {
    gameMode === GameMode.RPS
      ? setGameMode(GameMode.RPSLS)
      : setGameMode(GameMode.RPS);
  };

  return (
    <RockPaperScissors>
      <ScoreBoard
        gameMode={gameMode}
        gameScore={gameMode === GameMode.RPS ? RPSScore : RPSLSScore}
        setGameMode={handleGameMode}
      />
      {userPick === GamePickCode.DEFAULT ? (
        <GamePick gameMode={gameMode} setUserPick={setUserpick} />
      ) : (
        <GameResult />
      )}
    </RockPaperScissors>
  );
};

export default Game;
