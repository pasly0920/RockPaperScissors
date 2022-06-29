enum ColorCode {
  DARK = "hsl(229, 25%, 31%)",
  SCORE = "hsl(229, 64%, 46%)",
  OUTLINE = "hsl(217, 16%, 45%)",
  SCISSORS1 = "hsl(39, 89%, 49%)",
  SCISSORS2 = "hsl(40, 84%, 53%)",
  PAPER1 = "hsl(230, 89%, 62%)",
  PAPER2 = "hsl(230, 89%, 65%)",
  ROCK1 = "hsl(349, 71%, 52%)",
  ROCK2 = "hsl(349, 70%, 56%)",
  LIZARD1 = "hsl(261, 73%, 60%)",
  LIZARD2 = "hsl(261, 72%, 63%)",
  SPOCK1 = "hsl(189, 59%, 53%)",
  SPOCK2 = "hsl(189, 58%, 57%)",
  BACKGROUND1 = "hsl(214, 47%, 23%)",
  BACKGROUND2 = "hsl(237, 49%, 15%)",
  WHITE = "hsl(0, 0%, 100%)",
}

enum GamePickCode {
  "DEFAULT" = 0,
  "ROCK" = 1,
  "PAPER" = 2,
  "SCISSOR" = 3,
  "LIZARD" = 4,
  "SPOCK" = 5,
}

enum FontSize {
  LARGE = "3.5rem",
  MEDIUM = "1rem",
  SMALL = "0.9rem",
  TINY = "0.8rem",
}

enum GameMode {
  "RPS" = 0,
  "RPSLS" = 1,
}

enum GameResultCode {
  "DEFAULT" = -2,
  "LOSE" = -1,
  "DRAW" = 0,
  "WIN" = 1,
}

const Size = {
  mobile: "480px",
  tablet: "768px",
  labtop: "1200px",
  desktop: "1800px",
};

const Device = {
  Mobile: `(max-width: ${Size.mobile})`,
  Tablet: `(max-width: ${Size.tablet})`,
  Labtop: `(max-width: ${Size.labtop})`,
  Desktop: `(min-width: ${Size.desktop})`,
};

export { ColorCode, GamePickCode, FontSize, GameMode, GameResultCode, Device };
