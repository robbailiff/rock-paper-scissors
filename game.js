// Rock, Paper, Scissors Game

let playerScore = 0;
let computerScore = 0;

const displayChoice = document.querySelector(".display-choice");
const displayResult = document.querySelector(".display-result");

const playerScoreboard = document.querySelector("div.player-score h2");
const computerScoreboard = document.querySelector("div.computer-score h2");


const buttons = document.querySelectorAll('button.player-choice');
        buttons.forEach((button) => {
            button.addEventListener("click", (e) => {
                e.stopPropagation;
                let playerChoice = e.target.id;
                let computerChoice = computerPlay();
                let result = playRound(playerChoice, computerChoice);
                if (result === "Win") {
                    playerScore++;
                    playerScoreboard.textContent = playerScore;
                } else if (result === "Lose") {
                    computerScore++;
                    computerScoreboard.textContent = computerScore;
                }

                if (playerScore === 5) {
                    displayChoice.textContent = "Congratulations!";
                    displayResult.textContent = "You have won the match!";
                    buttons.forEach((button) => {
                        button.disabled = true;
                    });
                } else if (computerScore === 5) {
                    displayChoice.textContent = "Better luck next time!";
                    displayResult.textContent = "You have lost the match!";
                    buttons.forEach((button) => {
                        button.disabled = true;
                    });
                }
            });
        });


const resetButton = document.querySelector(".reset-button");
resetButton.addEventListener("click", () => {
    resetGame();
})


function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];
    let randNum = Math.floor(Math.random()* 3);
    return options[randNum];
}

function playRound(playerChoice, computerChoice) {

    displayChoice.textContent = `You selected ${playerChoice} and the computer selected ${computerChoice}.`;
    
    let result;
    
    switch (playerChoice) {
        case 'rock':
            if (computerChoice === 'paper') {
                displayResult.textContent = "You lose! Paper beats rock!";
                result = "Lose";
                break;
            } else if (computerChoice === 'scissors') {
                displayResult.textContent = "You win! Rock beats scissors!";
                result = "Win";
                break;
            }
            break;
        case 'paper':
            if (computerChoice === 'rock') {
                displayResult.textContent = "You win! Paper beats rock!";
                result = "Win";
                break;
            } else if (computerChoice === 'scissors') {
                displayResult.textContent = "You lose! Scissors beats paper!";
                result = "Lose"
                break;
            }
            break;
        case 'scissors':
            if (computerChoice === 'rock') {
                displayResult.textContent = "You lose! Rock beats scissors!";
                result = "Lose"
                break;
            } else if (computerChoice === 'paper') {
                displayResult.textContent = "You win! Scissors beats paper!";
                result = "Win";
                break;
            }
        default:
            displayResult.textContent = "It's a draw!";
            result = "Draw"
    }
    return result;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    displayChoice.textContent = "Rock, Paper, Scissors?";
    displayResult.textContent = "Make your choice!";
    playerScoreboard.textContent = 0;
    computerScoreboard.textContent = 0;
    buttons.forEach((button) => {
        button.disabled = false;
    });
}
