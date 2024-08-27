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