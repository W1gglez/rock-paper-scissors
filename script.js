function getComputerChoice(){
    rand = Math.random()
    if (0 <= rand && rand < .33){
        return("Rock");
    } else if (.33 <= rand && rand <.67) {
        return("Paper")
    } else {
        return("Scissors")
    }
}

console.log(getComputerChoice())