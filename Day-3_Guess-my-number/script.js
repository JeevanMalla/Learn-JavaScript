"use strict";
let secret = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const reset = function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  secret = Math.trunc(Math.random() * 20) + 1;
};
document.querySelector(".again").addEventListener("click", reset);
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //NO INPUT
  if (!guess) {
    document.querySelector(".message").textContent = "NO NUMBER";

    //WHEN THE GUESS IS RIGHT
  } else if (guess == secret) {
    document.querySelector(".number").textContent = secret;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".message").textContent = "Correct Number";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    }
  } else if (guess > secret) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Guess Is Too High!!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost The Game!!!";
    }

    //WHEN THE GUESS IS LOW
  } else if (guess < secret) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Guess Is Too Low!!!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost The Game!!!";
    }
  }
});
