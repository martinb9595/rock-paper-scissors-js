function getComputerChoice() {
  const items = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

const playerSelection = prompt("Pick a choice");
function playRound(playerSelection, computerSelection) {
  if ((computerSelection === "rock") & (playerSelection === "rock")) {
    return "Draw, you both drew rock";
  } else if ((computerSelection === "paper") & (playerSelection === "rock")) {
    return "Computer wins you selected rock and he had paper";
  } else if (
    (computerSelection === "scissors") &
    (playerSelection === "rock")
  ) {
    return "Player wins, computer selected scissors and you beat him with rock";
  } else if (
    (computerSelection === "paper") &
    (playerSelection === "scissors")
  ) {
    return "Player wins";
  } else if ((computerSelection === "rock") & (playerSelection === "paper")) {
    return "Player wins, computer selected rock and you beat him with paper";
  } else if (
    (computerSelection === "scissors") &
    (playerSelection === "paper")
  ) {
    return "Computer wins, you selected paper and computer selected rock";
  } else if (
    (computerSelection === "rock") &
    (playerSelection === "scissors")
  ) {
    return "Computer wins, you selected scissors and computer had rock";
  } else if ((computerSelection === "paper") & (playerSelection === "paper")) {
    return "Draw, you both selected paper";
  } else if (
    (computerSelection === "scissors") &
    (playerSelection === "scissors")
  ) {
    return "Draw, you both selected scissors";
  }
}

const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
