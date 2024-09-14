// Min and max number for the random number
let minNumber = 1;
let maxNumber = 50;

// Guess limit and guess count + users guess
let guessLimit = 3;
let guessCount = 0;
let guessedNumber = 0;

// Generate a random number between minNumber and maxNumber
let randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

function getUserGuess() {
    let usersGuess = prompt(personName + ' ' + 'guess a number between ' + minNumber + ' and ' + maxNumber + '.' + ' You have ' + guessLimit + ' try(s) left.');
    guessedNumber = parseInt(usersGuess);

    if (isNaN(guessedNumber)) {
        alert('Please enter a valid number.');
        getUserGuess();
    }
    else {
        guessCount++;
        guessLimit--;
    }
}

function playGame() {
    getUserGuess();

    if (guessedNumber === randomNumber) {
        alert('You guessed the number! You win! ' + personName + '!' + ' ' + 'You guessed' + randomNumber + ' in ' + guessCount + ' try(s)');
        playAgain();
    } else if (guessCount === 3) {
        alert('Game over' + ' ' + personName + '! The number was ' + randomNumber + '.');
        playAgain();
    } else if (guessedNumber < randomNumber) {
        alert('Too low! ' + personName + ' ' + 'You have ' + guessLimit + ' try(s) left.');
        playGame();
    } else if (guessedNumber > randomNumber) {
        alert('Too high! ' + personName + ' ' + 'You have ' + guessLimit + ' try(s) left.');
        playGame();
    }
}

function playAgain() {
    if (confirm('Do you want to play again?')) {
        guessCount = 0;
        guessLimit = 3;
        randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
        playGame();
    }
}


function initGame() {
    // Reset game variables
    guessCount = 0;
    guessLimit = 3;
    randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    
    // Get player's name
    personName = prompt('What is your name?');
    
    // Start the game
    playGame();
}

// Add an event listener to the button
document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('button');
    button.addEventListener('click', initGame);
});
