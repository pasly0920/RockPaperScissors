import { GameMode, GamePickCode, GameResult } from './constants';

const getResult = (
  userPick: number,
  housePick: number,
  gameMode: number
): number => {
  if (gameMode === GameMode.RPS) {
    if (userPick === GamePickCode.ROCK) {
      switch (housePick) {
        case GamePickCode.ROCK:
          return GameResult.DRAW;
        case GamePickCode.PAPER:
          return GameResult.LOSE;
        case GamePickCode.SCISSOR:
          return GameResult.WIN;
      }
    } else if (userPick === GamePickCode.PAPER) {
      switch (housePick) {
        case GamePickCode.ROCK:
          return GameResult.WIN;
        case GamePickCode.PAPER:
          return GameResult.DRAW;
        case GamePickCode.SCISSOR:
          return GameResult.LOSE;
      }
    } else if (userPick === GamePickCode.SCISSOR) {
      switch (housePick) {
        case GamePickCode.ROCK:
          return GameResult.LOSE;
        case GamePickCode.PAPER:
          return GameResult.WIN;
        case GamePickCode.SCISSOR:
          return GameResult.DRAW;
      }
    }
  } else {
    if (userPick === GamePickCode.ROCK) {
      switch (housePick) {
        case GamePickCode.ROCK:
          return GameResult.DRAW;
        case GamePickCode.PAPER:
        case GamePickCode.SPOCK:
          return GameResult.LOSE;
        case GamePickCode.SCISSOR:
        case GamePickCode.LIZARD:
          return GameResult.WIN;
      }
    } else if (userPick === GamePickCode.PAPER) {
      switch (housePick) {
        case GamePickCode.PAPER:
          return GameResult.DRAW;
        case GamePickCode.SCISSOR:
        case GamePickCode.LIZARD:
          return GameResult.LOSE;
        case GamePickCode.ROCK:
        case GamePickCode.SPOCK:
          return GameResult.WIN;
      }
    } else if (userPick === GamePickCode.SCISSOR) {
      switch (housePick) {
        case GamePickCode.SCISSOR:
          return GameResult.DRAW;
        case GamePickCode.ROCK:
        case GamePickCode.SPOCK:
          return GameResult.LOSE;
        case GamePickCode.PAPER:
        case GamePickCode.LIZARD:
          return GameResult.WIN;
      }
    } else if (userPick === GamePickCode.LIZARD) {
      switch (housePick) {
        case GamePickCode.LIZARD:
          return GameResult.DRAW;
        case GamePickCode.SCISSOR:
        case GamePickCode.ROCK:
          return GameResult.LOSE;
        case GamePickCode.PAPER:
        case GamePickCode.SPOCK:
          return GameResult.WIN;
      }
    } else {
      switch (housePick) {
        case GamePickCode.SPOCK:
          return GameResult.DRAW;
        case GamePickCode.PAPER:
        case GamePickCode.LIZARD:
          return GameResult.LOSE;
        case GamePickCode.ROCK:
        case GamePickCode.SCISSOR:
          return GameResult.WIN;
      }
    }
  }
  return -3; // err
  //D 0 Rock 1 Paper 2 Scissors 3 Lizard 4 Spock 5
};

export default getResult;
