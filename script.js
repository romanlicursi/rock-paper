function getComputerChoice() {
    const number = Math.random();
    if (number <= .33) {
        return "rock";
    } else if ( number > .33 && number <= .66) {
        return "paper";
    } else {
        return "scissors"
    }
}







let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    // Convert the humanChoice to lowercase to make it case-insensitive
    humanChoice = humanChoice.toLowerCase();

    let resultMessage ="";

    // Determine the winner based on the choices
    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            resultMessage ="You lose! Paper beats Rock";
            computerScore++;
        } else if (computerChoice === "scissors") {
            resultMessage="You win! Rock beats Scissors";
            humanScore++;
        } else {
            resultMessage = "It's a tie! Both chose Rock";
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You win! Paper beats Rock");
            humanScore++;
        } else if (computerChoice === "scissors") {
            resultMessage ="You lose! Scissors beats Paper";
            computerScore++;
        } else {
            resultMessage ="It's a tie! Both chose Paper";
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            resultMessage ="You lose! Rock beats Scissors";
            computerScore++;
        } else if (computerChoice === "paper") {
            resultMessage ="You win! Scissors beats Paper";
            humanScore++;
        } else {
            resultMessage ="It's a tie! Both chose Scissors";
        }
    } else {
        resultMessage ="Invalid choice! Please choose 'rock', 'paper', or 'scissors'.";
    }

    const resultDiv = document.getElementById("results");
    resultDiv.textContent = resultMessage;

    const humanDiv = document.getElementById("humanScore");
    humanDiv.textContent = `Your score: ${humanScore}`;

    const computerDiv = document.getElementById("computerScore");
    computerDiv.textContent = `Computer score: ${computerScore}`;



}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    const gameResultDiv = document.getElementById("game-result");

    if (computerScore > humanScore) {
        gameResultDiv.textContent =  "Computer wins!";
    } else if (humanScore > computerScore) {
        gameResultDiv.textContent = "You win!";
}
    humanDiv.textContent = `Your score: ${0}`;
    computerDiv.textContent = `Your score: ${0}`;

}

const rock = document.getElementById("rock");
rock.textContent = "ROCK";

const paper = document.getElementById("paper");
paper.textContent = "PAPER";

const scissors = document.getElementById("scissors");
scissors.textContent = "SCISSORS";

rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});


playGame();