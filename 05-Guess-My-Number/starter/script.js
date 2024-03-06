'use strict';

// document.querySelector('.message').textContent;
// document.querySelector('.message').textContent = 'Correct number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
document.querySelector('.number').textContent = secretNumber;
document.querySelector('.score').textContent = score;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  // When NO GUESS
  if (!guess) {
    document.querySelector('.message').textContent = 'No guess!🚨';

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number!✅';
    document.querySelector('body').style.backgroundColor = 'green';

    document.querySelector('.number').style.width = '30rem';

    //  When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!📈';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('body').style.backgroundColor = '#e32636';
      document.querySelector('.message').textContent = 'You lost the game...😞';
      document.querySelector('.score').textContent = 0;
    }

    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('body').style.backgroundColor = '#e32636';
      document.querySelector('.message').textContent = 'You lost the game...😞';
      document.querySelector('.score').textContent = 0;
    }
  }
});
