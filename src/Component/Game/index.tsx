import { useEffect, useState } from "react";
import styled from "styled-components";

import GameResult from "@Component/Game/GameResult";
import GamePick from "@Component/Game/GamePick";
import ScoreBoard from "@Component/Game/ScoreBoard";
import { GamePickCode, GameMode, Device } from "@utils/constants";
import getRandomInt from "@utils/getRandomInt";
import getResult from "@utils/getResult";

const RockPaperScissors = styled.div`
  @media ${Device.Mobile} {
    width: 100%;
  }
  width: 70%;
  margin: 3% auto;
`;

const Game: React.FC = () => {
  const [gameMode, setGameMode] = useState<number>(GameMode.RPS);
  const [userPick, setUserPick] = useState<number>(GamePickCode.DEFAULT);
  const [housePick, setHousePick] = useState<number>(GamePickCode.DEFAULT);
  const [RPSScore, setRPSScore] = useState<number>(0);
  const [RPSLSScore, setRPSLSScore] = useState<number>(0);

  const resetPick = () => {
    setUserPick(GamePickCode.DEFAULT);
    setHousePick(GamePickCode.DEFAULT);
  };

  const handleGameMode = () => {
    gameMode === GameMode.RPS
      ? setGameMode(GameMode.RPSLS)
      : setGameMode(GameMode.RPS);
    resetPick();
  };

  useEffect(() => {
    const getRandomGameMode = () => {
      const randomGameMode =
        gameMode === GameMode.RPS
          ? getRandomInt(GamePickCode.ROCK, GamePickCode.SCISSOR)
          : getRandomInt(GamePickCode.ROCK, GamePickCode.SPOCK);
      setHousePick(randomGameMode);
    };
    const setScore = () => {
      const result = getResult(userPick, housePick, gameMode);
      gameMode === GameMode.RPS
        ? setRPSScore((prev) => prev + result)
        : setRPSLSScore((prev) => prev + result);
    };

    if (userPick !== GamePickCode.DEFAULT)
      housePick === GamePickCode.DEFAULT ? getRandomGameMode() : setScore();
  }, [gameMode, housePick, userPick]);

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
          gameMode={gameMode}
          resetPick={resetPick}
        />
      )}
    </RockPaperScissors>
  );
};

export default Game;
