let humanScore = 0;
let computerScore  = 0;
function getComputerChoice (computerChoice) {
    let x = Math.floor(Math.random() * 3);
    if (x === 0) {
        computerChoice = 'Rock';
    } else if (x === 1) {
        computerChoice = 'Paper';
    } else {
        computerChoice = 'Scissors';
    }
    return alert(computerChoice);
}
function getHumanChoice(humanChoice) {
    humanChoice = prompt('Enter Rock, Paper, or Scissors');
}

function playRound(humanChoice,computerChoice,humanScore,computerScore) {
    humanChoice = humanChoice.toUpperCase();
    computerChoice = computerChoice.toUpperCase();
    if (humanChoice === ROCK && computerChoice === ROCK) {
        console.log('Tie');
    } else if (humanChoice === ROCK && computerChoice === PAPER) {
        console.log('You lose! Paper beats Rock');
        computerScore++;
    } else if (humanChoice === ROCK && computerChoice === SCISSORS) {
        console.log('You Win! Rock beats Scissors');
        humanScore++;
    } else if (humanChoice === PAPER && computerChoice === PAPER) {
        console.log('Tie');
    } else if (humanChoice === PAPER && computerChoice === ROCK) {
        console.log('You Win! Paper beats Rock');
        humanScore++;
    } else if (humanChoice === PAPER && computerChoice === SCISSORS) {
        console.log('You Lose! Scissors beats Paper');
        computerScore++;
    } else if (humanChoice === SCISSORS && computerChoice === SCISSORS) {
        console.log('Tie');
    } else if (humanChoice === SCISSORS && computerChoice === PAPER) {
        console.log('You Win! Scissors beats Paper');
        humanScore++;
    } else if (humanChoice === SCISSORS && computerChoice === ROCK) {
        console.log('You Lose! Rock beats Scissors');
        computerScore++;
    }
    return;
}
