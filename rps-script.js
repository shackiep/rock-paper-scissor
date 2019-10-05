var playerScore = 0;
var computerScore = 0;
var winner = 0;
var playerSelection;
var computerPlay;

//Select all the button attributes and make it register their id's to match with the images.
const buttons = document.querySelectorAll('.weapons');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playerSelection = button.id;
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    })
});
//Function randomizes computer selection
function computerPlay () {
    var choices = ["rock", "paper", "scissors"];
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

//Update Scores
var updateScore = () => {
    const pScore = document.querySelector("#playerScore");
    const cScore = document.querySelector("#computerScore");
    if (winner == 2) {
        computerScore++;
        cScore.innerHTML = computerScore;
    }
    else if (winner == 1) {
        playerScore++;
        pScore.innerHTML = playerScore;
    }
}

//Funciton plays one round
function playRound(playerSelection, computerSelection) {
    //Check Tie
    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
    }
    else {
            //Check Rock
        if (playerSelection === 'rock') {
            if (computerSelection === 'scissors') {
                console.log("You Win!" + playerSelection + " beats " + computerSelection + "!");
                winner = 1;
            }
            else {
                console.log("You Lose! " + computerSelection + " beats " + playerSelection +  "!");
                winner = 2;
            }
        }
        //Check Papper
        if (playerSelection === 'paper') {
            if (computerSelection === 'rock') {
                console.log("You Win! " + playerSelection + " beats " + computerSelection + "!");
                winner = 1;
            }
            else {
                console.log("You Lose! " + computerSelection + " beats " + playerSelection +  "!");
                winner = 2;
            }
        }
        //Check Scissors
        if (playerSelection === 'scissors') {
            if (computerSelection === 'paper') {
                console.log("You Win! " + playerSelection + " beats " + computerSelection + "!");
                winner = 1;
            }
            else {
                console.log("You Lose! " + computerSelection + " beats  " + playerSelection +  "!");
                winner = 2;
            }
        }
    }
    updateScore();
    console.log("Player Choice: " + playerSelection + " | Computer Choice: " + computerSelection);
    console.log("Player Score: " + playerScore + " | Computer Score: " + computerScore);
    winner = 0;
}

function gameWinner() {
    if (playerScore === computerScore) { console.log("It's a tie!"); }
    if (playerScore > computerScore) { console.log("Player Wins!"); }
    else { console.log("Computer Wins! You SUCK"); }
}
//Play 5 rounds of Rock Paper Scissors
function game() {
        var computerSelection = computerPlay();
        while ((playerSelection != 'rock') && (playerSelection != 'paper') && (playerSelection != 'scissors')) { 
            playerSelection = prompt("You've entered an invalid answer. Please enter Rock, Paper, or Scissors");
            playerSelection = playerSelection.toLowerCase();
        playRound(playerSelection, computerSelection);
    }
    gameWinner();
}
