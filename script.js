// Min and max number for the random number
let minNumber = 1;
let maxNumber = 50;

// Guess limit and guess count + users guess
let guessLimit = 3;
let guessCount = 0;
let guessedNumber = 0;

// Generate a random number between minNumber and maxNumber
let randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
let personName = prompt('What is your name?');

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
    } else if (guessCount === 3) {
        alert('Game over' + ' ' + personName + '! The number was ' + randomNumber + '.');
    } else if (guessedNumber < randomNumber) {
        alert('Too low! ' + personName + ' ' + 'You have ' + guessLimit + ' try(s) left.');
        playGame();
    } else if (guessedNumber > randomNumber) {
        alert('Too high! ' + personName + ' ' + 'You have ' + guessLimit + ' try(s) left.');
        playGame();
    }
}

playGame();


