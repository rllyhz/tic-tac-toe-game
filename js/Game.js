//  Author: Rully Ihza Mahendra
//  Username: rllyhz
//  Repo: https://github.com/rllyhz/tic-tac-tor-game
//  GIt: git://github.com/rllyhz/tic-tac-tor-game.git

function setEnvironment() {
   restartButton[0].style.display = "none";
   board.style.visibility = "hidden";
   board.style.pointerEvents = "none";
}

function startGame() {
   circleTurn = false;

   cellElements.forEach(cell => {
      cell.className = "cell";
   });
   board.className = "board x";

   cellElements.forEach(cell => {
      cell.addEventListener("click", handleClick, { once: true });
   });

   setBoardHoverClass();
}

function restartGame() {
   messageEndGame.innerText = "";
   endGameElement.classList.remove("show");
   startGame();
}

function handleClick(event) {
   const cell = event.target;
   const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
   // create mark
   placeMark(cell, currentClass);
   // win?
   if (checkWin(currentClass)) {
      endGame(false);
   } else if (isDraw()) {
      endGame(true);
   } else {
      // switch the turn
      switchTurn();
      setBoardHoverClass();
   }
}

function placeMark(cell, currentClass) {
   cell.classList.add(currentClass);
}

function switchTurn() {
   circleTurn = !circleTurn;
}

function setBoardHoverClass() {
   board.classList.remove(X_CLASS);
   board.classList.remove(CIRCLE_CLASS);

   if (circleTurn) {
      board.classList.add(CIRCLE_CLASS);
   } else {
      board.classList.add(X_CLASS);
   }
}

function checkWin(currentClass) {
   return WINNING_PATTERN.some(pattern => {
      return pattern.every(index => {
         return cellElements[index].classList.contains(currentClass);
      });
   });
}

function isDraw() {
   return [...cellElements].every(cell => {
      return (
         cell.classList.contains(X_CLASS) ||
         cell.classList.contains(CIRCLE_CLASS)
      );
   });
}

function endGame(draw) {
   if (draw) {
      messageEndGame.innerText = "Draw!";
   } else {
      messageEndGame.innerText = `${circleTurn ? "O" : "X"} are The WINNING!`;
   }
   endGameElement.classList.add("show");
}

//  Author: Rully Ihza Mahendra
//  Username: rllyhz
//  Repo: https://github.com/rllyhz/tic-tac-tor-game
//  GIt: git://github.com/rllyhz/tic-tac-tor-game.git
