'use strict';

// document.querySelector('.message').textContent;
// document.querySelector('.message').textContent = 'Correct number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

function startGame() {
  const secretNumber = Math.trunc(Math.random() * 20 + 1);
  let score = 20;
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.score').textContent = score;
}

startGame();
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No guess!🚨';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number!✅';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too high!📈';
    score--;
    document.querySelector('.score').textContent = score;
    if (score <= 0) {
      document.querySelector('.message').textContent = 'You Lost! Try again..';
      startGame();
    }
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too low!📉';
    score--;

    document.querySelector('.score').textContent = score;
    if (score <= 0) {
      document.querySelector('.message').textContent = 'You Lost! Try again..';
      startGame();
    }
  }
});
