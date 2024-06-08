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




function getHumanChoice() {
    let choice = prompt("Enter your choice. Rock, paper, or scissors?")
    choice = choice.toLowerCase();
    if (choice === "rock" ) {
        return choice;
    } if (choice === "paper") {
        return choice;
    } if (choice === "scissors") {
        return choice;
    } else {
        alert("Incorrect input! Try again.")
        getHumanChoice()
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    // Convert the humanChoice to lowercase to make it case-insensitive
    humanChoice = humanChoice.toLowerCase();

    // Determine the winner based on the choices
    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            console.log("You lose! Paper beats Rock");
            computerScore++;
        } else if (computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors");
            humanScore++;
        } else {
            console.log("It's a tie! Both chose Rock");
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You win! Paper beats Rock");
            humanScore++;
        } else if (computerChoice === "scissors") {
            console.log("You lose! Scissors beats Paper");
            computerScore++;
        } else {
            console.log("It's a tie! Both chose Paper");
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors");
            computerScore++;
        } else if (computerChoice === "paper") {
            console.log("You win! Scissors beats Paper");
            humanScore++;
        } else {
            console.log("It's a tie! Both chose Scissors");
        }
    } else {
        console.log("Invalid choice! Please choose 'rock', 'paper', or 'scissors'.");
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if (computerScore > humanScore) {
        console.log("Computer wins!");
    } else if (humanScore > computerScore) {
        console.log("You win!");
}
}

console.log(playGame());