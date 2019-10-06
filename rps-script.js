var playerScore = 0;
var computerScore = 0;
var winner = 0;
var playerSelection;
var computerPlay;

//Select all the button attributes and make it register their id's to match with the images.
const buttons = document.querySelectorAll('.weapons');
const pImage = document.querySelector('#pImage > p');
const cImage = document.querySelector('#cImage > p');
const imageMargin = document.querySelectorAll('.circle > p');
const comment = document.querySelector('#comment');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        computerSelection = computerPlay();
        choiceImages(playerSelection, computerSelection);
        playRound(playerSelection, computerSelection);
    })
});

//Changes Choice Selection on screen
function choiceImages(playerSelection, computerSelection) {
    document.getElementById('pp').style.marginTop = '20px';
    document.getElementById('cc').style.marginTop = '20px';
    pImage.innerHTML = '<img src=\"' + playerSelection + '.png\" width="175px" height="auto" alt="'+ playerSelection +'"/>';
    cImage.innerHTML = '<img src=\"' + computerSelection + '.png\" width="175px" height="auto" alt="'+ computerSelection +'"/>';
}

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
        comment.innerHTML = "It's a tie!";
        console.log("It's a tie!");
    }
    else {
            //Check Rock
        if (playerSelection === 'rock') {
            if (computerSelection === 'scissors') {
                comment.innerHTML = "You Win! " + playerSelection + " beats " + computerSelection + "!";
                console.log("You Win! " + playerSelection + " beats " + computerSelection + "!");
                winner = 1;
            }
            else {
                comment.innerHTML = "You Lose! " + computerSelection + " beats  " + playerSelection +  "!";
                console.log("You Lose! " + computerSelection + " beats " + playerSelection +  "!");
                winner = 2;
            }
        }
        //Check Papper
        if (playerSelection === 'paper') {
            if (computerSelection === 'rock') {
                comment.innerHTML = "You Win! " + playerSelection + " beats " + computerSelection + "!";
                console.log("You Win! " + playerSelection + " beats " + computerSelection + "!");
                winner = 1;
            }
            else {
                comment.innerHTML = "You Lose! " + computerSelection + " beats  " + playerSelection +  "!";
                console.log("You Lose! " + computerSelection + " beats " + playerSelection +  "!");
                winner = 2;
            }
        }
        //Check Scissors
        if (playerSelection === 'scissors') {
            if (computerSelection === 'paper') {
                comment.innerHTML = "You Win! " + playerSelection + " beats " + computerSelection + "!";
                console.log("You Win! " + playerSelection + " beats " + computerSelection + "!");
                winner = 1;
            }
            else {
                comment.innerHTML = "You Lose! " + computerSelection + " beats  " + playerSelection +  "!";
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
