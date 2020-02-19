//  Author: Rully Ihza Mahendra
//  Username: rllyhz
//  Repo: https://github.com/rllyhz/tic-tac-tor-game
//  GIt: git://github.com/rllyhz/tic-tac-tor-game.git

setEnvironment();

startButton.addEventListener("click", function() {
   this.remove();
   board.style.visibility = "visible";
   board.style.pointerEvents = "all";
   restartButton[0].style.display = "block";
   startGame();
});

restartButton.forEach(buttton => {
   buttton.addEventListener("click", () => {
      if (endGameElement.classList.contains("show")) {
         restartGame();
      } else {
         startGame();
      }
   });
});

//  Author: Rully Ihza Mahendra
//  Username: rllyhz
//  Repo: https://github.com/rllyhz/tic-tac-tor-game
//  GIt: git://github.com/rllyhz/tic-tac-tor-game.git
