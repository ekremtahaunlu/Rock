const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function play(userChoice) {
  const computer = getComputerChoice();
  if (userChoice === computer) {
    return "It's a tie!";
  } else if (
    (userChoice === "rock" && computer === "scissors") ||
    (userChoice === "paper" && computer === "rock") ||
    (userChoice === "scissors" && computer === "paper")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

document.getElementById("rock").addEventListener("click", function() {
  const result = play("rock");
  document.getElementById("result").innerHTML = result;
});

document.getElementById("paper").addEventListener("click", function() {
  const result = play("paper");
  document.getElementById("result").innerHTML = result;
});

document.getElementById("scissors").addEventListener("click", function() {
  const result = play("scissors");
  document.getElementById("result").innerHTML = result;
});