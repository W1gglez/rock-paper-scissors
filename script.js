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
     playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

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

function calcScore(playerScore, computerScore){
    if (playerScore > computerScore){
        return("Winner Winner Chicken Dinner!!!")
    } else if (computerScore > playerScore){
        return("Better luck next time.")
    } else if (playerScore == computerScore){
        return("We have ourselves tie!")
    }
        
}

function finalScore(playerScore, computerScore, playerComputerTie){
    return("Final Scores are as follows: Player - " + playerScore + " | Computer - " + computerScore + " | Ties - " + playerComputerTie)
}

function playGame(){
    let computerScore = 0;
    let playerScore = 0;
    let playerComputerTie = 0;

    for (let i=1; i<=5; i++){
        
        round = playRound(prompt(`Round ${i}: Rock Paper Scissors`), getComputerChoice());
        console.log(round);

        if (round.includes("You Win")){
            playerScore += 1
        } else if (round.includes("You Lose")){
            computerScore += 1
        } else {
            playerComputerTie += 1
        }

    }

    console.log(calcScore(playerScore, computerScore) + " " + finalScore(playerScore, computerScore, playerComputerTie))
}


console.log(playGame())