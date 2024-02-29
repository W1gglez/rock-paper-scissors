function getComputerChoice(){
    rand = Math.random()
    if (0 <= rand && rand < .33){
        return("Rock");
    } else if (.33 <= rand && rand <.67) {
        return("Paper");
    } else {
        return("Scissors");
    }
}

function playRound(playerSelection, computerSelection){
     playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
     console.log(playerSelection)

    if (playerSelection === "Rock" && computerSelection === "Scissors"){
        return("You Win! Rock beats Scissors.");
    } else if (playerSelection === "Rock" && computerSelection === "Paper"){
        return("You Lose! Paper beats Rock.");
    } else if (playerSelection === "Rock" && computerSelection === "Rock"){
        return("It\'s a Tie!")
    } else if(playerSelection === "Paper" && computerSelection === "Rock"){
        return("You Win! Rock beats Scissors.")
    } else if (playerSelection === "Paper" && computerSelection === "Scissors"){
        return("You Lose! Paper beats Rock.")
    } else if (playerSelection === "Paper" && computerSelection === "Paper"){
        return("It\'s a Tie!")
    } else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        return("You Win! Rock beats Scissors.")
    } else if (playerSelection === "Scissors" && computerSelection === "Rock"){
        return("You Lose! Paper beats Rock.")
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors"){
        return("It\'s a Tie!")
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection))