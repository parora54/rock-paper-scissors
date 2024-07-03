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

function getHumanChoice() {
    let user = String(prompt("Type 'rock', 'paper', or 'scissors'."));
    user = user.toLowerCase();

    switch (user) {
        case "rock":
            return "rock"
        case "scissors":
            return "scissors"
        case "paper":
            return "paper"
        default:
            getHumanChoice();
    }
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
    
        if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        } else if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    
        console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
    }

    while (humanScore < 3 && computerScore < 3) {
        const cpu = getComputerChoice()
        const human = getHumanChoice()
        playRound(human, cpu)
    }

    if (humanScore == 3) {
        console.log("GAME OVER, PLAYER WINS!!!")
    }
    else {
        console.log("GAME OVER, CPU WINS!!!")
    }
}

playGame();