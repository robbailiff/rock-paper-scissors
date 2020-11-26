// Rock, Paper, Scissors Game

let playerScore = 0;
let computerScore = 0;

// #######################################################################


const buttons = document.querySelectorAll('button.player-choice');
        buttons.forEach((button) => {
            button.addEventListener("click", (e) => {
                e.stopPropagation;
                let playerChoice = e.target.id;
                let computerChoice = computerPlay();
                let result = playRound(playerChoice, computerChoice);
                if (result === "Win") {
                    playerScore++;
                } else if (result === "Lose") {
                    computerScore++;
                }

                if (playerScore === 5) {
                    console.log(`You win ${playerScore}:${computerScore}`);
                } else if (computerScore === 5) {
                    console.log(`You lose ${computerScore}:${playerScore}`);
                }
            });
        });

// #######################################################################

function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];
    let randNum = Math.floor(Math.random()* 3);
    return options[randNum];
}

function playRound(playerChoice, computerChoice) {
    const display = document.querySelector(".display")
    display.textContent = `You selected ${playerChoice} and the computer selected ${computerChoice}.`;
    
    let result;
    
    switch (playerChoice) {
        case 'rock':
            if (computerChoice === 'paper') {
                console.log("You lose! Paper beats rock!")
                result = "Lose";
                break;
            } else if (computerChoice === 'scissors') {
                console.log("You win! Rock beats scissors!")
                result = "Win";
                break;
            }
        case 'paper':
            if (computerChoice === 'rock') {
                console.log("You win! Paper beats rock!")
                result = "Win";
                break;
            } else if (computerChoice === 'scissors') {
                console.log("You lose! Scissors beats paper!");
                result = "Lose"
                break;
            }
        case 'scissors':
            if (computerChoice === 'rock') {
                console.log("You lose! Rock beats scissors!");
                result = "Lose"
                break;
            } else if (computerChoice === 'paper') {
                console.log("You win! Scissors beats paper!")
                result = "Win";
                break;
            }
        default:
            console.log("It's a draw!");
            result = "Draw"
    }
    return result;
}

// function game() {
//     let playerScore = 0;
//     let computerScore = 0;
//     // while (playerScore < 5 || computerScore < 5) {
//     for (let i = 0; i <= 5; i++) {
        
//         let playerChoice;
//         const buttons = document.querySelectorAll('button.player-choice');
//         buttons.forEach((button) => {
//             button.addEventListener("click", (e) => {
//                 e.stopPropagation;
//                 let playerChoice = e.target.id;
//                 let computerChoice = computerPlay();
//                 let result = playRound(playerChoice, computerChoice);
//                 if (result === "Win") {
//                     playerScore++;
//                 } else if (result === "Lose") {
//                     computerScore++;
//                 }
//                 console.log(e.target.id);
//                 console.log(`Inside variable value: ${playerChoice}`);
//             });
//         });

       

//         let playerChoice = prompt("Rock, Paper, Scissors?").toLowerCase();
//         let computerChoice = computerPlay();
//         let result = playRound(playerChoice, computerChoice);
//         if (result === "Win") {
//             playerScore++;
//         } else if (result === "Lose") {
//             computerScore++;
//         }
//     }
//     if (playerScore > computerScore) {
//         console.log(`You win ${playerScore}:${computerScore}`);
//     } else if (computerScore > playerScore) {
//         console.log(`You lose ${computerScore}:${playerScore}`);
//     } else {
//         console.log(`You draw ${playerScore}:${computerScore}`);
//     }
// }

// game();
