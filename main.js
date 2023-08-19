const eightBall = document.querySelector("img");
const input = document.querySelector("input");
const answer = document.querySelector("p.answer");
const error = document.querySelector("p.error");

const answerArr = [
  "Tak!",
  "Nie.",
  "Może...",
  "Ciężko powiedzieć.",
  "Nie chcesz wiedzieć.",
  "Jest taka możliwość.",
];

const shakeBall = () => {
  eightBall.classList.add("shake-animation");
  setTimeout(checkInput, 1000);
};

const checkInput = () => {
  if (input.value !== "" && input.value.includes("?")) {
    generatorAnswer();
    error.textContent = "";
  } else if (input.value !== "" && input.value.slice(-1) !== "?") {
    error.textContent = "musisz dodać znak zapytania na końcu zdania";
    answer.textContent = "";
  } else {
    error.textContent = "musisz zadać jakieś pytanie!";
    answer.textContent = "";
  }
  eightBall.classList.remove("shake-animation");
};

const generatorAnswer = () => {
  const number = Math.floor(Math.random() * 5);

  answer.innerHTML = `<span>odpowiedź:</span> ${answerArr[number]}`;
};

eightBall.addEventListener("click", shakeBall);
