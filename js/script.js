
// // Global Variables - pointing to HTML elements // //
const guessedLetter = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const guessInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const guessRemaining = document.querySelector(".remaining");
const guessTotal = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");
//console.log(guessedLetter, guessButton, guessInput, wordInProgress, guessRemaining, guessTotal, message, playAgainButton);

const word = "magnolia"; // start word of the game

// // Functions // // 
// Placeholder function (circles)
const placeholder = function (word) {
    const placeholderResults = [];
    for (const letter of word) {
      console.log(letter);
      placeholderResults.push("●");
    }
    wordInProgress.innerText = placeholderResults.join("");
  };
  
  placeholder(word);
  
  // // Event Listeners //
  // Guess! button event listener
  guessButton.addEventListener("click", function (e) {
    e.preventDefault(); //clear
    const capture = input.value;
    console.log(capture);
    input.value = "";
  });