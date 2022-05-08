import { useEffect, useState } from 'react';
import styled from 'styled-components';

import GameResult from '@Component/Game/GameResult';
import GamePick from '@Component/Game/GamePick';
import ScoreBoard from '@Component/Game/ScoreBoard';
import { GamePickCode, GameMode } from '@utils/constants';
import getRandomInt from '@utils/getRandomInt';

const RockPaperScissors = styled.div`
  width: 70%;
  margin: 3% auto;
`;

const Game: React.FC = () => {
  const [gameMode, setGameMode] = useState<number>(GameMode.RPS);
  const [userPick, setUserPick] = useState<number>(GamePickCode.DEFAULT);
  const [housePick, setHousePick] = useState<number>(GamePickCode.DEFAULT);
  const [RPSScore, setRPSScore] = useState<number>(0);
  const [RPSLSScore, setRPSLSScore] = useState<number>(0);

  const handleGameMode = () => {
    gameMode === GameMode.RPS
      ? setGameMode(GameMode.RPSLS)
      : setGameMode(GameMode.RPS);
  };

  const resetUserPick = () => {
    setUserPick(GamePickCode.DEFAULT);
  };

  useEffect(() => {
    if (userPick !== GamePickCode.DEFAULT) {
      const randomNumber = getRandomInt(GamePickCode.ROCK, GamePickCode.SPOCK);
      setHousePick(randomNumber);
    }
  }, [userPick]);

  return (
    <RockPaperScissors>
      <ScoreBoard
        gameMode={gameMode}
        gameScore={gameMode === GameMode.RPS ? RPSScore : RPSLSScore}
        setGameMode={handleGameMode}
      />
      {userPick === GamePickCode.DEFAULT ? (
        <GamePick gameMode={gameMode} setUserPick={setUserPick} />
      ) : (
        <GameResult
          userPick={userPick}
          housePick={housePick}
          resetUserPick={resetUserPick}
          setRPSScore={setRPSScore}
          setRPSLSScore={setRPSLSScore}
        />
      )}
    </RockPaperScissors>
  );
};

export default Game;
