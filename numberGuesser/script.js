let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random() * 10);
}

function compareGuesses(userGuess, computerGuess, target) {
    compareUserInput(userGuess);
    const userDiffrence = getAbsoluteDistance(userGuess, target);
    const computerDiffrence = getAbsoluteDistance(computerGuess, target);
    if(computerDiffrence === userDiffrence || userDiffrence < computerDiffrence) {
        return true;
    } else {
        return false;
    }
}

function updateScore(winner) {
    winner === 'human' ? humanScore++ : computerScore++;
}

function advanceRound() {
    currentRoundNumber++;
}

function getAbsoluteDistance(num1, num2) {
    return Math.abs(num1 - num2);
}

function compareUserInput(userInput) {
    if(userInput> 9 || userInput < 0) {
        window.alert('Number is out of range');
    }
}
