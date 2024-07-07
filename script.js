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

function playGame() {
    const feedback = document.querySelector(".feedback");
    const winner = document.querySelector(".winner");
    const human = document.querySelector("#human");
    const computer = document.querySelector("#cpu");
    const buttons = document.querySelectorAll('.choice');
    const reset = document.querySelector(".reset");
    const imageArea = document.querySelector(".emojis")
    const emoji = document.querySelector("#default");
    const winEmoji = document.createElement("img")
    winEmoji.src = "./images/win.jpeg"
    const loseEmoji = document.createElement("img")
    loseEmoji.src = "./images/lose.jpg"

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
    
        if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            winner.textContent = (`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        } else if (humanChoice === computerChoice) {
            winner.textContent = ("It's a tie!");
        } else {
            winner.textContent = (`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }

        human.textContent = humanScore;
        computer.textContent = computerScore;

        if (humanScore == 3 || computerScore == 3) {
            const resetButton = document.createElement("button")
            resetButton.textContent = "PLAY NEW GAME"

            reset.appendChild(resetButton);

            resetButton.addEventListener("click", () => {
                newGame();
                resetButton.remove()
            })

            if (humanScore == 3) {
                winner.textContent = ("GAME OVER, PLAYER WINS!!!")
                imageArea.removeChild(emoji)
                imageArea.appendChild(winEmoji)
            }
            else {
                winner.textContent = ("GAME OVER, CPU WINS!!!")
                imageArea.removeChild(emoji)
                imageArea.appendChild(loseEmoji)
            }
        }
    }

    function newGame() {
        humanScore = 0;
        computerScore = 0;
        human.textContent = humanScore;
        computer.textContent = computerScore;
        feedback.textContent = null;
        winner.textContent = null;
        imageArea.removeChild(imageArea.lastElementChild)
        imageArea.appendChild(emoji)
    }

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if (!(humanScore >= 3 || computerScore >= 3)) {
                const cpu = getComputerChoice()
                feedback.textContent = `You chose: ${button.id}, Computer chose: ${cpu}`
                playRound(button.id, cpu)
            }        
        });
    })

}

playGame();