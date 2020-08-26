//Business Logic
function Game(player1,player2){
  this.turnOrder = [player1,player2];
}

function Player(name){
  this.name = name;
  this.totalScore = 0;
  this.turnScore = 0;
}

Player.prototype.rollDice = function(){
  let rollDice = Math.floor((Math.random() * 6) + 1);
  return rollDice;
}

function runGame(){
  let gameOn = true;
  while (gameOn){
    for (const currentPlayer of pigDice.turnOrder){
      playerTurn(currentPlayer);
      if (currentPlayer.totalScore >= 100){
        gameOn = false;
      }
    } 
  }

}
let player1 = new Player("Bilbo");
let player2 = new Player("Gandalf");
let pigDice = new Game(player1,player2);

function playerTurn(currentPlayer) {
  let turnActive = true;
  currentPlayer.turnScore = 0;
  while (turnActive) {
    let userInput = prompt("press any key to roll/ press h to 'hold'.")
    if (userInput === "h") {
      turnActive = false;
    } else {
      let rollDice = currentPlayer.rollDice();
      if (rollDice === 1){
        currentPlayer.turnScore = 0;
        turnActive = false;
      } else {
        currentPlayer.turnScore += rollDice;
      }
    }
  }
  currentPlayer.totalScore += turnScore;
}
