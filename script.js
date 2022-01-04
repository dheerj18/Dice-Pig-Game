'use strict';
//selecting the objects
const playerEl0 = document.querySelector('.player--0');
const playerEl1 = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const buttonRoll = document.querySelector('.btn--roll');
const newGame = document.querySelector('.btn--new');
const buttnHold = document.querySelector('.btn--hold');
const currentEl0 = document.getElementById('current--0');
const currentEl1 = document.getElementById('current--1');
const reset = function () {
  currentScore = 0;
  scores = [0, 0];
  activePlayer = 0;
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentEl0.textContent = 0;
  currentEl1.textContent = 0;
  dice.classList.add('hidden');
  playerEl0.classList.remove('player--winner');
  playerEl1.classList.remove('player--winner');
  playerEl0.classList.add('player--active');
  playerEl1.classList.remove('player--active');
};
/*
//changing the textcontents
Number((score0El.textContent = 0));
Number((score1El.textContent = 0));
dice.classList.add('hidden');
*/
let currentScore;
let scores;
let activePlayer;
//creating the variable to use if the game is still on or ended
let playing;
reset();
const switchPlayer = function () {
  //switching the player
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerEl0.classList.toggle('player--active');
  playerEl1.classList.toggle('player--active');
};
buttonRoll.addEventListener('click', function () {
  if (playing) {
    //generating random number
    let diceRoll = Math.trunc(Math.random() * 6) + 1;

    //displaying the dice
    dice.classList.remove('hidden');
    dice.src = `dice-${diceRoll}.png`;

    //checking when rolls one or not
    if (diceRoll !== 1) {
      currentScore += diceRoll;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switching to the next player
      switchPlayer();
    }
  }
});
buttnHold.addEventListener('click', function () {
  if (playing) {
    //add current score to score
    scores[activePlayer] += currentScore;
    //scores[1]=scores[1]+currenrscore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //check if players score is >=100
    if (scores[activePlayer] >= 100) {
      dice.classList.add('hidden');
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //switch to the next player
      switchPlayer();
    }
  }
});
newGame.addEventListener('click', reset);
