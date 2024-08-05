# Test task specification:

The app is a scissors, rock, paper game, with the ability to bet on the winning
position.

## Specifications

- Player starts with a balance of 5000.
- Each bet should be 500 (player can place several bets on any position: 500,
  1000,
  1500 etc)
- Player can not bet more than 2 positions per one game
- Winning rate for bet on 1 position is 14
- Winning rate for bet on 2 positions is 3

## Requirements

- There should be three betting positions, rock, paper, scissors.
- Player can bet on rock, paper, or scissors, but not on all three at the same
  time.
- The bet is reduced from the balance.
- When betting done button is clicked, the computer runs a random paper,
  scissors,
  rock match.
- Player choice should be compared to computers choice and only one bet can
  win –
  every tie counts as loss
- If player bets on one of them and wins, the return is 14 times the bet.
- If player bets on two of them and wins the return is 3 times the bet.
- Loss bets are not returned to player
- Bets with tie result are returned to player
- After round ends the return adds to the balance
- Player cannot bet if player has less balance than available for bet.

Title ROCK vs PAPER on the second screen means
“computer choice ROCK versus player choice PAPER” — not ROCK bet vs PAPER bet.

![rock_paper_scissors_1](/src/assets/rock_paper_scissors_1.png "rock_paper_scissors_1")

![rock_paper_scissors_2](/src/assets/rock_paper_scissors_2.png
"rock_paper_scissors_2")

![rock_paper_scissors_3](/src/assets/rock_paper_scissors_3.png
"rock_paper_scissors_3")