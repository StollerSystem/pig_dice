// Businesss Logic 

// Game Logic 
function Game(player1,player2,player3) {
  this.turnOrder = [player1,player2,player3];
}

Game.prototype.endGame = function() {
  // WHEN A PLAYERS TOTAL SCORE >= 100 THEN GAME OVER!
}

function runGame(matchScore) {
  let gameOn = true;
  while (gameOn) { 
    for (const currentPlayer of pigDice.turnOrder) {
      // PLAYER TURN __      
      console.log(currentPlayer.name,"'s turn! Current Score:",currentPlayer.totalScore);
      playerTurn(currentPlayer);      
      if (currentPlayer.totalScore >= matchScore) {
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
  // TOTAL SCORE UP HERE ^  
}


// Player constructor 
function Player(name) {
  this.name = name;
  this.totalScore = 0;
  this.turnScore = 0;
  this.winner = false
}
Player.prototype.rollDice = function() {
  let rollDice = Math.floor((Math.random() * 6) + 1);  
  return rollDice;  
}



// Initialize game objects
let player1 = new Player("Bilbo");
let player2 = new Player("Gandalf");
let player3 = new Player("Froto");
let pigDice = new Game(player1,player2,player3);
