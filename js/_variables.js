//  Author: Rully Ihza Mahendra
//  Username: rllyhz
//  Repo: https://github.com/rllyhz/tic-tac-tor-game
//  GIt: git://github.com/rllyhz/tic-tac-tor-game.git

const X_CLASS = "x";
const CIRCLE_CLASS = "circle";
let circleTurn;
const WINNING_PATTERN = [
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   [0, 4, 8],
   [2, 4, 6]
];

const startButton = document.getElementById("startButton");
const restartButton = [...document.getElementsByClassName("restartButton")];
const board = document.getElementById("board");
const cellElements = document.querySelectorAll("[data-cell]");
const endGameElement = document.getElementById("endGameMessageElement");
const messageEndGame = document.querySelector("[data-end-game]");

//  Author: Rully Ihza Mahendra
//  Username: rllyhz
//  Repo: https://github.com/rllyhz/tic-tac-tor-game
//  GIt: git://github.com/rllyhz/tic-tac-tor-game.git
