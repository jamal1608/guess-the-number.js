
var secretNumber =  Math.floor(Math.random() * 10) + 1;

var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));


if (userGuess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
    alert("Close enough to the correct answer");
} else {
    alert("Sorry, incorrect guess. The correct answer was " + secretNumber);
}
