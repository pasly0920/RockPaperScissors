import { GameMode, GamePickCode, GameResultCode } from './constants';

const getResult = (
  userPick: number,
  housePick: number,
  gameMode: number
): number => {
  if (gameMode === GameMode.RPS) {
    if (userPick === GamePickCode.ROCK) {
      switch (housePick) {
        case GamePickCode.ROCK:
          return GameResultCode.DRAW;
        case GamePickCode.PAPER:
          return GameResultCode.LOSE;
        case GamePickCode.SCISSOR:
          return GameResultCode.WIN;
      }
    } else if (userPick === GamePickCode.PAPER) {
      switch (housePick) {
        case GamePickCode.ROCK:
          return GameResultCode.WIN;
        case GamePickCode.PAPER:
          return GameResultCode.DRAW;
        case GamePickCode.SCISSOR:
          return GameResultCode.LOSE;
      }
    } else if (userPick === GamePickCode.SCISSOR) {
      switch (housePick) {
        case GamePickCode.ROCK:
          return GameResultCode.LOSE;
        case GamePickCode.PAPER:
          return GameResultCode.WIN;
        case GamePickCode.SCISSOR:
          return GameResultCode.DRAW;
      }
    }
  } else {
    if (userPick === GamePickCode.ROCK) {
      switch (housePick) {
        case GamePickCode.ROCK:
          return GameResultCode.DRAW;
        case GamePickCode.PAPER:
        case GamePickCode.SPOCK:
          return GameResultCode.LOSE;
        case GamePickCode.SCISSOR:
        case GamePickCode.LIZARD:
          return GameResultCode.WIN;
      }
    } else if (userPick === GamePickCode.PAPER) {
      switch (housePick) {
        case GamePickCode.PAPER:
          return GameResultCode.DRAW;
        case GamePickCode.SCISSOR:
        case GamePickCode.LIZARD:
          return GameResultCode.LOSE;
        case GamePickCode.ROCK:
        case GamePickCode.SPOCK:
          return GameResultCode.WIN;
      }
    } else if (userPick === GamePickCode.SCISSOR) {
      switch (housePick) {
        case GamePickCode.SCISSOR:
          return GameResultCode.DRAW;
        case GamePickCode.ROCK:
        case GamePickCode.SPOCK:
          return GameResultCode.LOSE;
        case GamePickCode.PAPER:
        case GamePickCode.LIZARD:
          return GameResultCode.WIN;
      }
    } else if (userPick === GamePickCode.LIZARD) {
      switch (housePick) {
        case GamePickCode.LIZARD:
          return GameResultCode.DRAW;
        case GamePickCode.SCISSOR:
        case GamePickCode.ROCK:
          return GameResultCode.LOSE;
        case GamePickCode.PAPER:
        case GamePickCode.SPOCK:
          return GameResultCode.WIN;
      }
    } else {
      switch (housePick) {
        case GamePickCode.SPOCK:
          return GameResultCode.DRAW;
        case GamePickCode.PAPER:
        case GamePickCode.LIZARD:
          return GameResultCode.LOSE;
        case GamePickCode.ROCK:
        case GamePickCode.SCISSOR:
          return GameResultCode.WIN;
      }
    }
  }
  return -3; // err
  //D 0 Rock 1 Paper 2 Scissors 3 Lizard 4 Spock 5
};

export default getResult;
