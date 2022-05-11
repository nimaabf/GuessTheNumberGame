'use strict';

// const secretNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(secretNumber);
// let score = 20;
// // document.querySelector('.number').textContent = number;
// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);

//   if (!guess) {
//     console.log('No Number Entered');
//   } else if (guess === secretNumber) {
//     document.querySelector('.message').textContent = '🎉 Correct Guess';
//     document.querySelector('.number').textContent = secretNumber;
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'TOO HIGH📉';
//       score = score - 1;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You Lost🛑';
//       document.querySelector('.score').textContent = 0;
//     }
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//         document.querySelector('.message').textContent = 'TOO LOW';
//         score = score - 1;
//         document.querySelector('.score').textContent = score;
//       } else {
//         document.querySelector('.message').textContent = 'You Lost🛑';
//         document.querySelector('.score').textContent = 0;
//       }

//   }
// });

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    console.log('No Number Entered');
    document.querySelector('.message').textContent = 'Enter A Number To Start';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'You Won🎉';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? `Go Lower` : 'Go Higher';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
