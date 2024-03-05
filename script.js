function getComputerChoice() {
  rand = Math.random();
  if (0 <= rand && rand < 0.33) {
    return "Rock";
  } else if (0.33 <= rand && rand < 0.67) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection + " " + computerSelection)
  if (playerSelection === "Rock" && computerSelection === "Scissors") {
    return "win";
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    return "lose";
  } else if (playerSelection === "Rock" && computerSelection === "Rock") {
    return "tie";
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return "win";
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    return "lose";
  } else if (playerSelection === "Paper" && computerSelection === "Paper") {
    return "tie";
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    return "win";
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    return "lose";
  } else if (
    playerSelection === "Scissors" &&
    computerSelection === "Scissors"
  ) {
    return "tie";
  }

  
}

function calcScore(playerScore, computerScore) {
  if (playerScore > computerScore) {
    return "Winner Winner Chicken Dinner 🎉 !";
  } else if (computerScore > playerScore) {
    return "🦾 Computers rule! Humans drool!";
  } 
}

function runningScore(playerScore, computerScore) {
  return "Player - " + playerScore + " | Computer - " + computerScore;
}

let computerScore = 0;
let playerScore = 0;

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
let results = document.querySelector("#results");
let score = document.querySelector("#score");

function checkScore(playerscore, computerscore){
if (playerScore == 5 || computerScore == 5) {
    results.style.fontSize = '32px'
    results.textContent = calcScore(playerScore, computerScore)
    
     btnPaper.disabled = true;
    btnRock.disabled = true;
    btnScissors.disabled = true;
    }
}

btnRock.addEventListener("click", () => {
  let round = playRound("Rock", getComputerChoice());
  console.log(round)
  if (round === "win") {
    results.textContent = "You Win! Rock beats Scissors.";
    playerScore += 1;
    score.textContent = runningScore(playerScore, computerScore);
  } else if (round === "lose") {
    results.textContent = "You Lose! Paper beats Rock.";
    computerScore += 1;
    score.textContent = runningScore(playerScore, computerScore);
  } else {
    results.textContent = "It's a Tie!";
    score.textContent = runningScore(playerScore, computerScore);
  }
  checkScore(playerScore, computerScore);
});

btnPaper.addEventListener("click", () => {
  let round = playRound("Paper", getComputerChoice());
  console.log(round)
  if (round === "win") {
    results.textContent = "You Win! Paper beats Rock.";
    playerScore += 1;
    score.textContent = runningScore(playerScore, computerScore);
  } else if (round === "lose") {
    results.textContent = "You Lose! Scissors beats Paper.";
    computerScore += 1;
    score.textContent = runningScore(playerScore, computerScore);
  } else {
    results.textContent = "It's a Tie!";
    score.textContent = runningScore(playerScore, computerScore);
  }
  checkScore(playerScore, computerScore);
});

btnScissors.addEventListener("click", () => {
  let round = playRound("Scissors", getComputerChoice());
console.log(round)
  if (round === "win") {
    results.textContent = "You Win! Scissors beats Paper.";
    playerScore += 1;
    score.textContent = runningScore(playerScore, computerScore);
  } else if (round === "lose") {
    results.textContent = "You Lose! Rock beats Scissors.";
    computerScore += 1;
    score.textContent = runningScore(playerScore, computerScore);
  } else {
    results.textContent = "It's a Tie!";
    score.textContent = runningScore(playerScore, computerScore);
  }
  checkScore(playerScore, computerScore);
});



