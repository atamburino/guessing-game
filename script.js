// let Life = 'I am alive'; // Proof of life

// Min and max number for the random number
let minNumber = 1;
let maxNumber = 50;

// Guess limit and guess count + users guess
let guessLimit = 3;
let guessCount = 0;
let guessedNumber = 0;

// Generate a random number between minNumber and maxNumber
let randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
console.log(randomNumber); // Proof of random number





// Give the user a prompt to enter their number - We want to use the window prompt
// to ask the user their number
let usersGuess = prompt('Enter a number between 1 and 50');

// Convert the users guess to a number
guessedNumber = parseInt(usersGuess);

console.log(guessedNumber); // Proof of guessed number



// We want to track the user's number of guesses


// Use if/else and truthy/falsy concepts to evaluate whether or not the user's guess was correct.
// NOTE: If a user's guess is incorrect, respond with a prompt letting them know whether or not their guess was too high or too low and how many chances remain.


// 5. If a user guesses within three chances, display an alert letting the user know they've won and what the number was.


//6. If a user loses, display an alert letting the user know they have lost and reveal the number.


// other goals -- 
// - Return an error message if the user does NOT enter a guess that is a number. Do NOT count that guess as a valid attempt. Let the user know how many guesses remain.
// - Provide a user with the option to restart the game WITHOUT using a loop. This is tricky! Only do this step if you are absolutely finished with all the other requirements and want to push yourself.


// console.log(Life);