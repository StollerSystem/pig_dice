// Businesss Logic 

// Game Logic 
function Game(player1,player2) {
  this.turnOrder = [player1,player2];
}

Game.prototype.endGame = function() {
  // WHEN A PLAYERS TOTAL SCORE >= 100 THEN GAME OVER!
}

function runGame() {
  let gameOn = true;
  while (gameOn) { //will be < 100 
    // pigDice.turnOrder.forEach(function(currentPlayer) {
    for (const currentPlayer of pigDice.turnOrder) {
      // PLAYER TURN __      
      console.log(currentPlayer.name,"'s turn! Current Score:",currentPlayer.totalScore);
      playerTurn(currentPlayer);          
      //currentPlayer.totalScore += 1 // < to keep from infinite looop
      if (currentPlayer.totalScore >= 50) {
        console.log(currentPlayer.name," WINS!!!!");
        currentPlayer.winner = true;
        gameOn = false;
        break;
      }       
    }
  }
  console.log("GAME OVER")  
}

function playerTurn(player) {
  turnActive = true 
  player.turnScore = 0;
  while (turnActive) {
    // PLAYER TURN __
    let input = prompt('"Hit any key to ROLL or "h" to HOLD');
    console.log(input)
    if (input === "h") {
      turnActive = false       
    } else {
        // THE ROLL!
        let roll = player.rollDice()
        console.log(player.name,"rolled a ",roll)
        // CHECK IF ITS A 1
        if (roll === 1) {
          player.turnScore = 0;
          turnActive = false
          console.log("Rolled a 1, Turn over!")
        // IF ITS NOT A 1
        } else {
          console.log("prev turn score:",player.turnScore)
          player.turnScore += roll
          console.log("new turn score:",player.turnScore)
        }        
    }
  }
  player.totalScore += player.turnScore 
  console.log(player.name,"'s TOTAL SCORE:",player.totalScore)
  // TOTAL SCORE UP HERE  
}



// Player Logic 
function Player(name) {
  this.name = name;
  this.totalScore = 0;
  this.turnScore = 0;
  this.winner = false
}


Player.prototype.rollDice = function() {
  let rollDice = Math.floor((Math.random() * 6) + 1);
  //console.log(rollDice)
  return rollDice;
  //ROLL DICE HERE // Math.floor((Math.random() * 6) + 1);
  // IF NOT ONE, ADD TO TURNSCORE
  // THEN HAVE OPTION TO ROLL AGAIN OR HOLD
  
  
}


Player.prototype.hold = function() {
  //ENDS TURN AND ADDS SCORE
}


Player.prototype.rollOne = function() {
  //IF A PLAYER ROLLS A ONE
}

// Initialize game objects

let player1 = new Player("Bilbo");
let player2 = new Player("Gandalf");
let pigDice = new Game(player1,player2);
