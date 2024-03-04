
const words = ["hangman", "javascript", "programming", "computer", "developer"];
let word = words[Math.floor(Math.random() * words.length)];
console.log(word);
let guessedLetters = [];
const maxWrongGuesses = 6;
let wrongGuesses = 0;
function displayWord() {
  const answerSection = document.getElementById("answer-section");
  answerSection.innerHTML = "";
for (const char of word) {
    if (guessedLetters.includes(char)) {
      answerSection.innerHTML += char;
    } else {
      answerSection.innerHTML += "_";
    }
    answerSection.innerHTML += " "; 
  }
}
function handleLetterClick(event) {
  const letter = event.target.textContent;
if (!guessedLetters.includes(letter) && word.includes(letter)) {
    guessedLetters.push(letter);
    displayWord();
  } else {
  wrongGuesses++;
    updateHangman();
    checkGameStatus();
  }
event.target.disabled = true;
}
function updateHangman() {
  switch (wrongGuesses) {
    case 1:
      head();
      break;
    case 2:
      body();
      break;
    case 3:
      leftHand();
      break;
    case 4:
      rightHand();
      break;
    case 5:
      leftLeg();
      break;
    case 6:
      rightLeg();
      break;
    default:
      break;
  }
}
function checkGameStatus() {
  if (wrongGuesses === maxWrongGuesses) {
    
    alert("Game over! You've been hanged. The word was: " + word);
    resetGame();
  } else if (!document.getElementById("answer-section").textContent.includes("_")) {
  alert("Congratulations! You've guessed the word correctly: " + word);
    resetGame();
  }
}
function resetGame() {

  guessedLetters = [];
  wrongGuesses = 0;
  document.querySelectorAll(".hang img").forEach(img => img.remove());
word = words[Math.floor(Math.random() * words.length)];
document.querySelectorAll(".letter").forEach(letter => {
    letter.disabled = false;
  });
displayWord();
}
document.querySelectorAll(".letter").forEach(letter => {
  letter.addEventListener("click", handleLetterClick);
});
displayWord();
