function playerPlay(gameElements) {
    let playerSelection = (prompt("Choose either Rock, Paper or Scissors")).toLowerCase();

    while (!gameElements.includes(playerSelection)) {
        console.log("You entered an invalid option; you need to choose among Rock, Paper or Scissors");
        playerSelection = (prompt("Choose either Rock, Paper or Scissors")).toLowerCase();
    }

    return playerSelection;
}

function computerPlay(gameElements){
    let computerSelection = gameElements[Math.floor(Math.random()*gameElements.length)];
    return computerSelection;    
}

function playRound(counter, gameElements) {
    let playerSelection = playerPlay(gameElements);
    let computerSelection = computerPlay(gameElements);

    if (playerSelection === computerSelection) {
        console.log("It's a tie");
    }
    if (playerSelection === "rock" && computerSelection === "paper") {
        counter.computer++
        console.log("Computer wins the round; paper beats the rock.");
    }
    if (playerSelection === "rock" && computerSelection === "scissors") {
        counter.player++;
        console.log("You win the round; the rock beats the scissors.");
    }
    if (playerSelection === "paper" && computerSelection === "rock") {
        counter.player++;
        console.log("You win the round; paper beats the rock.");
    }
    if (playerSelection === "paper" && computerSelection === "scissors") {
        counter.computer++;
        console.log("Computer wins the round; the scissors beat paper.");
    }
    if (playerSelection === "scissors" && computerSelection === "paper") {
        counter.player++;
        console.log("You win the round; the scissors beat paper.");
    }
    if (playerSelection === "scissors" && computerSelection === "rock") {
        counter.computer++;
        console.log("Computer wins the round; the rock beats the scissors.");
    }
}

function playGame() {
    const gameElements = ["rock", "paper", "scissors"];

    let counter = {
        player : 0,
        computer : 0
    };

    for (let index = 0; index < 5; index++) {
        playRound(counter, gameElements);
    }
    getGameResult(counter);
}

function getGameResult(counter) {
    console.log(`Your score is: ${counter.player}`);
    console.log(`Computer score is: ${counter.computer}`);
    if (counter.player > counter.computer) {
        console.log("You won the game");
    } else if (counter.player === counter.computer){
        console.log("It's a tie");
    } else {
        console.log("You lost the game");
    }
}

// call to start the game
playGame();
