// console.log('Hello World!');


// Create a function getComputerChoice()
// Within the function return a random number using Math.random()
// Create if, else if, esle statements for the string values ('rock', 'paper', 'scissor')
// Test function using the return statement and console.log()


function getComputerChoice() {

    let computerChoice = Math.random();

    if (computerChoice >= 0.0 && computerChoice <= 0.34) {
        console.log('Computer chose rock, You lose! Rock beats scissor.');

    } else if (computerChoice >=0.35 && computerChoice <= 0.67) {
        console.log('Computer chose paper, You lose! Paper beats rock.');

    } else {
        return 'Computer chose scissors, You lose! Scissor beats paper.';
    }

}

getComputerChoice()