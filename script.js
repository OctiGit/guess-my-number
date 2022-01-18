'use strict';
/*
1) Poner un numero al lazar del 1  al 20
2) Elijo un número del 1 al 20 (no debe ser ni < 1 ni > 20
3) Cuando aprieto el boton lee el numero ingresado y lo compara con el numero al lazar
4) a) Si es igual, Hiscore tiene el valor de Score. El numero random se muestra y en background verde.
El input de numero elegido vuelve a estar vacio (o no). Boton check se inhabilita.
Si Score es mayor a Highscore, Highscore pasa a ser Score 
b) Si no es igual Score descuenta un punto. El input de numero elegido vuelve a estar vacio.
5) Again crea otro random number. Score vuelve a 20.
*/
const randNum = () => {
  return Math.floor(Math.random() * 20) + 1;
};

const check = document.querySelector('.check');
const again = document.querySelector('.again');
const guess = () => {
  return Number(document.querySelector('.guess').value);
};
const number = document.querySelector('.number');
const message = msg => (document.querySelector('.message').textContent = msg);
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const h1 = document.querySelector('.h1');
const body = document.querySelector('body');
let scoreNum = 20;
let highscoreNum = 0;
let secretNum = randNum();
console.log(`The secret number is ${secretNum} 😁🧐`);

check.addEventListener('click', function () {
  console.log(guess.value);

  // If the guess is not between 1 and 20
  if (guess() < 1 || guess() > 20) {
    message('Remember: between 1 and 20!');

    // If guess acerts!
  } else if (guess() === secretNum) {
    number.textContent = secretNum;
    body.style.backgroundColor = '#60b347';
    body.style.color = '#222222';
    message(`🎉 You won ${score.textContent} points!`);
    h1.textContent = 'Correct!';
    check.disabled = true;
    if (scoreNum > highscoreNum) highscoreNum = scoreNum;
    highscore.textContent = highscoreNum;

    // When guess is different than randNum
  } else if (guess() !== secretNum) {
    if (scoreNum > 1) {
      scoreNum--;
      score.textContent = scoreNum;
      message(
        guess() > secretNum
          ? '⏫ Too high, try again!'
          : '⏬ Too low, try again!'
      );
    } else {
      message('💥 Oh, you lost...');
      score.textContent = 0;
      check.disabled = true;
    }
  }

  // // if guess is greater
  // } else if (Number(guess.value) > randNum) {
  //   decrease('⏫ Too high, try again!');

  // // If guess is less
  // } else if (Number(guess.value) < randNum) {
  //   decrease('⏬ Too low, try again!');
  // }
  // function decrease(text) {
  //   if (scoreNum > 1) {
  //     scoreNum--;
  //     score.textContent = scoreNum;
  //     message() = text;
  //   } else {
  //     message() = '💥 Oh, you lost...';
  //     score.textContent = 0;
  //     check.disabled = true;
  //   }
  // }
});

again.addEventListener('click', function () {
  secretNum = randNum();
  console.log(secretNum);
  scoreNum = 20;
  document.querySelector('.guess').value = '';
  h1.textContent = 'Guess My Number!';
  body.style.backgroundColor = '#222222';
  body.style.color = '#eeeeee';
  number.style.width = '15rem';
  number.textContent = '?';
  check.disabled = false;
  score.textContent = '20';
  message('Start guessing...');
});
