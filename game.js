const gameElements = ["rock", "paper", "scissors"];
let playerSelection;
let computerSelection;
let counterPlayer = 0;
let counterComputer = 0;


function playerPlay() {
    playerSelection = (prompt("Choose either Rock, Paper or Scissors")).toLowerCase();
    playerInputValidator();
}

function computerPlay() {    
    computerSelection = gameElements[Math.floor(Math.random()*gameElements.length)];    
}

function playerInputValidator() {
    if (!gameElements.includes(playerSelection)) {
        console.log("You entered an invalid option; you need to choose among Rock, Paper or Scissors");
        playerPlay();
    }
}

function playRound() {
    playerPlay();
    computerPlay();

    if (playerSelection === computerSelection) {
        console.log("It's a tie");
    }
    if (playerSelection === "rock" && computerSelection === "paper") {
        counterComputer++
        console.log("Computer wins the round; paper beats the rock.");
    }
    if (playerSelection === "rock" && computerSelection === "scissors") {
        counterPlayer++;
        console.log("You win the round; the rock beats the scissors.");
    }
    if (playerSelection === "paper" && computerSelection === "rock") {
        counterPlayer++;
        console.log("You win the round; paper beats the rock.");
    }
    if (playerSelection === "paper" && computerSelection === "scissors") {
        counterComputer++;
        console.log("Computer wins the round; the scissors beat paper.");
    }
    if (playerSelection === "scissors" && computerSelection === "paper") {
        counterPlayer++;
        console.log("You win the round; the scissors beat paper.");
    }
    if (playerSelection === "scissors" && computerSelection === "rock") {
        counterComputer++;
        console.log("Computer wins the round; the rock beats the scissors.");
    }
}

function game() {
    for (let index = 0; index < 5; index++) {
        playRound();
    }
    getGameResult();
}

function getGameResult() {
    console.log(`Your score is: ${counterPlayer}`);
    console.log(`Computer score is: ${counterComputer}`);
    if (counterPlayer > counterComputer) {
        console.log("You won the game");
    } else if (counterPlayer === counterComputer){
        console.log("It's a tie");
    } else {
        console.log("You lost the game");
    }
}

// call to start the game
game();
