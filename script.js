// a function to get the computers choice of rock paper or scissors
function getComputerChoice (computerChoice) {
    let x = Math.floor(Math.random() * 3);
    if (x === 0) {
        computerChoice = 'Rock';
    } else if (x === 1) {
        computerChoice = 'Paper';
    } else {
        computerChoice = 'Scissors';
    }
    return computerChoice;
}
// a function to get the users choice of rock paper or scissors
function getHumanChoice(humanChoice) {
    humanChoice = prompt('Enter Rock, Paper, or Scissors');
    return humanChoice;
}

// a function to play a full game of rock paper scissors
function playGame() {
    let computerScore = 0;
    let humanScore = 0;
    let rounds = 0;

    // a function to play a round of rock paper scissors
    function playRound(humanChoice,computerChoice) {
        humanChoice = String(humanChoice).toUpperCase();
        computerChoice = String(computerChoice).toUpperCase();

    if (humanChoice === computerChoice) {
        console.log('No Winners Its a Tie :(')
    } else if (humanChoice === 'ROCK' && computerChoice === 'PAPER') {
        console.log('You lose! Paper beats Rock');
        computerScore++;
    } else if (humanChoice === 'ROCK' && computerChoice === 'SCISSORS') {
        console.log('You Win! Rock beats Scissors');
        humanScore++;
    } else if (humanChoice === 'PAPER' && computerChoice === 'ROCK') {
        console.log('You Win! Paper beats Rock');
        humanScore++;
    } else if (humanChoice === 'PAPER' && computerChoice === 'SCISSORS') {
        console.log('You lose! Scissors beats Paper');
        computerScore++;
    } else if (humanChoice === 'SCISSORS' && computerChoice === 'PAPER') {
        console.log('You Win! Scissors beats Paper');
        humanScore++;
    } else if (humanChoice === 'SCISSORS' && computerChoice === 'ROCK') {
        console.log('You lose! Rock beats Scissors');
        computerScore++;
    }
    
    }
    
    // a loop to play 5 rounds of the game
    while (rounds < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection,computerSelection);
        rounds++;
    }
    
return console.log(`Final scores: Human-${humanScore} Computer-${computerScore}`);
}


