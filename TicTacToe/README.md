# Tic-Tac-Toe Game

This project is a simple Tic-Tac-Toe game implemented using HTML, CSS, and JavaScript. The game allows two players to play against each other on a 3x3 grid. The game keeps track of the score and highlights the winning combination with animations.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Game Features](#game-features)
- [Code Overview](#code-overview)
  - [HTML](#html)
  - [CSS](#css)
  - [JavaScript](#javascript)
- [Event Listeners](#event-listeners)
- [Game Logic](#game-logic)
- [License](#license)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/tic-tac-toe.git
   ```
2. Navigate to the project directory:
   ```bash
   cd tic-tac-toe
   ```
3. Open `index.html` in your web browser to start the game.

## Usage

- Click on any empty cell to place your mark (X or O).
- The game automatically switches turns between Player X and Player O.
- The game detects the winner and highlights the winning combination.
- Click the "Restart" button to reset the board for a new game.
- Click the "End" button to reload the page and reset scores.

## Game Features

- Two-player mode (Player X and Player O).
- Score tracking for both players.
- Winning combination animation.
- Restart game functionality.
- End game functionality to reset scores.

## Code Overview

### HTML

The HTML file contains the structure of the game, including the 3x3 grid, score display, and control buttons.

### CSS

The CSS file contains styles for the game board, cells, animations for winning combinations, and score updates.

### JavaScript

The JavaScript file contains the main logic for the game, including event listeners, game state management, and win detection.

## Event Listeners

- `DOMContentLoaded`: Initializes the game and sets up event listeners.
- `click` on each cell: Handles the player's move.
- `click` on the "Restart" button: Resets the game board.
- `click` on the "End" button: Reloads the page and resets scores.

## Game Logic

### Initial Setup

- Initializes game state variables:
  - `isGameStopped`: Flag to check if the game is stopped.
  - `xScoreCounter` and `oScoreCounter`: Score counters for Player X and Player O.
  - `playerX` and `player0`: Flags to manage turns.
  - `array`: Array to keep track of moves.

### Player Moves

- Adds event listeners to each cell.
- Updates the cell with the player's mark (X or O) and switches turns.

### Win Detection

- Defines the winning combinations.
- Checks if any winning combination is met after each move.
- Highlights the winning combination and updates the score.

### Restart and End Game

- `Restart` button: Resets the game board and removes animations.
- `End` button: Reloads the page and resets scores.



![image](https://github.com/opoiasnik/JS/assets/122808904/44e5f007-743a-47f8-8b67-8f24118a518f)
![image](https://github.com/opoiasnik/JS/assets/122808904/ecfb1a14-2da6-485a-ad1d-4fe678c28d8c)
![image](https://github.com/opoiasnik/JS/assets/122808904/1bc9793b-f8f4-4740-ba2d-19d865c7c571)



