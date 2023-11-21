// // Global Variables - pointing to HTML elements // //
const lettersGuessed = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const guessInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const guessRemaining = document.querySelector(".remaining");
const guessRemainingSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");
console.log(guessButton, guessInput, wordInProgress, guessRemaining, guessRemainingSpan); 
console.log(message, playAgainButton);


const word = "magnolia"; //starter word
const guessedLetters = [];

// place holder circle symbols
const placeholder = function (word) {
  const placeholderLetters = [];
  for (const letter of word) {
    console.log(letter);
    placeholderLetters.push("●");
  }
  wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

// Guess! button processing inputs and validating
guessButton.addEventListener("click", function (e) {
  e.preventDefault();
  message.innerText = ""; // empty message
  const guess = guessInput.value; // retrieve input value
  const goodGuess = validateInput(guess); // validate input value

  if (goodGuess) {
    makeGuess(guess);
  }
  guessInput.value = "";
});

// Validating process
const validateInput = function (input) {
  const acceptedLetter = /[a-zA-Z]/; // letters only
  if (input.length === 0) {
    message.innerText = "Please enter a letter.";
  } else if (input.length > 1) {
    message.innerText = "Please enter a single letter.";
  } else if (!input.match(acceptedLetter)) {
    message.innerText = "Please enter a letter from A-Z.";
  } else {
    return input;
  }
};
// format guesses
const makeGuess = function (guess) {
  guess = guess.toUpperCase();
  if (guessedLetters.includes(guess)) {
    message.innerText = "Oops! Try again, letter already used.";
  } else {
    guessedLetters.push(guess);
    console.log(guessedLetters);
  }
};