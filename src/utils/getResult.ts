import { GameMode, GamePickCode } from './constants';

const getResult = (
  userPick: number,
  housePick: number,
  gameMode: number
): number => {
  if (gameMode === GameMode.RPS) {
    if (userPick === GamePickCode.ROCK) {
      switch (housePick) {
        case GamePickCode.ROCK:
          return 0;
        case GamePickCode.PAPER:
          return -1;
        case GamePickCode.SCISSOR:
          return 1;
      }
    } else if (userPick === GamePickCode.PAPER) {
      switch (housePick) {
        case GamePickCode.ROCK:
          return 1;
        case GamePickCode.PAPER:
          return 0;
        case GamePickCode.SCISSOR:
          return -1;
      }
    } else if (userPick === GamePickCode.SCISSOR) {
      switch (housePick) {
        case GamePickCode.ROCK:
          return -1;
        case GamePickCode.PAPER:
          return 1;
        case GamePickCode.SCISSOR:
          return 0;
      }
    }
  } else {
    if (userPick === GamePickCode.ROCK) {
      switch (housePick) {
        case GamePickCode.ROCK:
          return 0;
        case GamePickCode.PAPER:
        case GamePickCode.SPOCK:
          return -1;
        case GamePickCode.SCISSOR:
        case GamePickCode.LIZARD:
          return 1;
      }
    } else if (userPick === GamePickCode.PAPER) {
      switch (housePick) {
        case GamePickCode.PAPER:
          return 0;
        case GamePickCode.SCISSOR:
        case GamePickCode.LIZARD:
          return -1;
        case GamePickCode.ROCK:
        case GamePickCode.SPOCK:
          return 1;
      }
    } else if (userPick === GamePickCode.SCISSOR) {
      switch (housePick) {
        case GamePickCode.SCISSOR:
          return 0;
        case GamePickCode.ROCK:
        case GamePickCode.SPOCK:
          return -1;
        case GamePickCode.PAPER:
        case GamePickCode.LIZARD:
          return 1;
      }
    } else if (userPick === GamePickCode.LIZARD) {
      switch (housePick) {
        case GamePickCode.LIZARD:
          return 0;
        case GamePickCode.SCISSOR:
        case GamePickCode.ROCK:
          return -1;
        case GamePickCode.PAPER:
        case GamePickCode.SPOCK:
          return 1;
      }
    } else {
      switch (housePick) {
        case GamePickCode.SPOCK:
          return 0;
        case GamePickCode.PAPER:
        case GamePickCode.LIZARD:
          return -1;
        case GamePickCode.ROCK:
        case GamePickCode.SCISSOR:
          return 1;
      }
    }
  }
  return -3; // err
  //D 0 Rock 1 Paper 2 Scissors 3 Lizard 4 Spock 5
};

export default getResult;
