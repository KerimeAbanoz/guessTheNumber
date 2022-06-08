const number = Math.floor(Math.random() * 100 + 1);
console.log(number);
let guess = document.querySelector(".input");

const button = document.querySelector(".guess");
button.addEventListener("click", game);

function game() {
  if (guess.value < 1 || guess.value > 100) {
    document.getElementById("lead").innerHTML =
      "Enter a number between  1 and 100.";
  } else if (guess.value === NaN) {
    document.getElementById("lead").innerHTML = "Enter a valid input!";
  } else if (guess.value == number) {
    document.getElementById("lead").innerHTML = "gongrats!";
  } else if (guess.value >= number) {
    document.getElementById("lead").innerHTML = "You must go lower!";
  } else if (guess.value <= number) {
    document.getElementById("lead").innerHTML = "You must go higher!";
  }
};
