// import { BettingOption } from "../components/Game/Game.tsx";
// import { BettingOptionTheme } from "../components/App/BettingPosition/BettingPosition.tsx";

export enum BettingOption {
  ROCK = "rock",
  PAPER = "paper",
  SCISSORS = "scissors",
}

export enum BettingOptionTheme {
  BLUE = "blue",
  GREEN = "green",
  RED = "red",
}

const BettingOptions = [
  {
    label: BettingOption.ROCK,
    theme: BettingOptionTheme.BLUE,
  },
  {
    label: BettingOption.PAPER,
    theme: BettingOptionTheme.GREEN,
  },
  {
    label: BettingOption.SCISSORS,
    theme: BettingOptionTheme.RED,
  },
];

export default BettingOptions;
