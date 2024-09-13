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
    let usersGuess = prompt('Guess a number between ' + minNumber + ' and ' + maxNumber + '.' + ' You have ' + guessLimit + ' try(s) left.');
    guessedNumber = parseInt(usersGuess);
    guessCount++;
    guessLimit--;
}

function playGame() {
    getUserGuess();

    if (guessedNumber === randomNumber) {
        alert('You guessed the number! You win!');
    } else if (guessCount === 3) {
        alert('Game over! The number was ' + randomNumber + '.');
    } else if (guessedNumber < randomNumber) {
        alert('Too low! ' + ' ' + 'You have ' + guessLimit + ' try(s) left.');
        playGame();
    } else if (guessedNumber > randomNumber) {
        alert('Too high! ' + ' ' + 'You have ' + guessLimit + ' try(s) left.');
        playGame();
    }
}

playGame();

console.log(randomNumber);
console.log(guessedNumber);
console.log(guessCount);
console.log(guessLimit);