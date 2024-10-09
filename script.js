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
    while (guessCount < 3) {
        getUserGuess();
        
        let result;
        if (guessedNumber === randomNumber) {
            result = 'correct';
        } else if (guessedNumber < randomNumber) {
            result = 'low';
        } else {
            result = 'high';
        }
        
        switch (result) {
            case 'correct':
                alert(`You guessed the number! You win, ${personName}! You guessed ${randomNumber} in ${guessCount} try(s)`);
                return playAgain();
            case 'low':
                if (guessLimit > 0) {
                    alert(`Too low! ${personName} You have ${guessLimit} try(s) left.`);
                }
                break;
            case 'high':
                if (guessLimit > 0) {
                    alert(`Too high! ${personName} You have ${guessLimit} try(s) left.`);
                }
                break;
        }
    }
    
    alert(`Game over ${personName}! The number was ${randomNumber}.`);
    playAgain();
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
