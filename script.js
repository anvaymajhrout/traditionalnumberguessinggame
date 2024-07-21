const guessBtn = document.getElementById('guessBtn');
const resetBtn = document.getElementById('resetBtn');
const guessInput = document.getElementById('guessInput');
const messageDisplay = document.getElementById('messageDisplay');

let randomNumber = generateRandomNumber();
let attempts = 0;

guessBtn.addEventListener('click', makeGuess);
resetBtn.addEventListener('click', resetGame);

function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function makeGuess() {
    const userGuess = parseInt(guessInput.value);
    attempts++;
    if (userGuess === randomNumber) {
        displayMessage(`Congratulations! You guessed the correct number ${randomNumber} in ${attempts} attempts.`);
        guessBtn.disabled = true;
    } else if (userGuess > randomNumber) {
        displayMessage(`Too high! Try again.`);
    } else if (userGuess < randomNumber) {
        displayMessage(`Too low! Try again.`);
    } else {
        displayMessage(`Please enter a valid number.`);
    }
}

function resetGame() {
    randomNumber = generateRandomNumber();
    attempts = 0;
    guessInput.value = '';
    messageDisplay.value = '';
    guessBtn.disabled = false;
}

function displayMessage(message) {
    messageDisplay.value = message;
}
