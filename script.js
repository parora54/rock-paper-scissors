console.log("Hello There! Welcome to Rock Paper Scissors!");

function getComputerChoice() {
    let int = Math.floor(Math.random() * 3);
    let choice;
    if (int == 0) {
        choice = "scissors";
    }
    else if (int == 1) {
        choice = "paper";
    }
    else {
        choice = "rock";
    }
    return choice;
}

console.log(getComputerChoice());

