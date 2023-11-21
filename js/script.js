// // // Global Variables - pointing to HTML elements // //
const lettersGuessedElement = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const guessInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const guessRemaining = document.querySelector(".remaining");
const guessRemainingSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];

// // place holder (circle symbols)
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
  message.innerText = ""; //empty message
  const guess = guessInput.value; //retrieve input
  const goodGuess = validateInput(guess); //validate input value

  if (goodGuess) {
    makeGuess(guess);
  }
  guessInput.value = "";
});

// Validating process
const validateInput = function (input) {
  const acceptedLetter = /[a-zA-Z]/;
  if (input.length === 0) {
    //check if empty
    message.innerText = "Please enter a letter.";
  } else if (input.length > 1) {
    //check for multiple letters
    message.innerText = "Please enter a single letter.";
  } else if (!input.match(acceptedLetter)) {
    //check for letters only
    message.innerText = "Please enter a letter from A to Z.";
  } else {
    return input;
  }
};

// format guesses
const makeGuess = function (guess) {
  guess = guess.toUpperCase();
  if (guessedLetters.includes(guess)) {
    message.innerText = "Oops! Try a new letter.";
  } else {
    guessedLetters.push(guess);
    console.log(guessedLetters);
    showGuessedLetters();
    updateWordInProgress(guessedLetters);
  }
};

// display guessed letters
const showGuessedLetters = function () {
  lettersGuessedElement.innerHTML = ""; //clear
  for (const letter of guessedLetters) {
    const li = document.createElement("li");
    li.innerText = letter;
    lettersGuessedElement.append(li);
  }
};

// reveal letters in circle placeholders
const updateWordInProgress = function (guessedLetters) {
  const wordUpper = word.toUpperCase();
  const wordArray = wordUpper.split("");
  const displayWord = [];
  for (const letter of wordArray) {
    if (guessedLetters.includes(letter)) {
      displayWord.push(letter.toUpperCase());
    } else {
      displayWord.push("●");
    }
  }

  wordInProgress.innerText = displayWord.join("");
  playerStatus();
};
// you win
const playerStatus = function () {
  if (word.toUpperCase() === wordInProgress.innerText) {
    message.classList.add("win");
    message.innerHTML = `<p class="highlight">You guessed the correct word! Congrats!</p>`;
  }
};
