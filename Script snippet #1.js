var words = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
var word = words[Math.floor(Math.random() * words.length)];

var answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

function checkGuess() {
    var guess = guessField.value;
    if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
            }
        }
        guesses.textContent = answerArray.join(" ");
        if (answerArray.indexOf("_") === -1) {
            lastResult.textContent = "Congratulations! You guessed the word correctly!";
            guessField.disabled = true;
            guessSubmit.disabled = true;
        }
    }
    guessField.value = '';
    guessField.focus();
}
 