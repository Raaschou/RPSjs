function getComputerChoice() {
    return Math.random() < 0.33 ? "rock"
    : Math.random() < 0.66 ? "paper"
    : "scissors"
}

function getHumanChoice() {
    choice = prompt("Choose rock, paper, or scissors")
    return choice.toLowerCase()
}

function playRound(humanChoice, computerChoice) {
    console.log(`Human threw ${humanChoice}, computer threw ${computerChoice}`)
    if (humanChoice === computerChoice) {
        playRound(getHumanChoice(), getComputerChoice())
    } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++
        console.log("The human won the round!")
    } else {
        computerScore++
        console.log(`The computer won the round!`)
    }
    console.log(`The score is now: Human - ${humanScore}, Computer - ${computerScore}`)
}

let humanScore = 0
let computerScore = 0 



playRound(getHumanChoice(), getComputerChoice())
playRound(getHumanChoice(), getComputerChoice())
playRound(getHumanChoice(), getComputerChoice())
playRound(getHumanChoice(), getComputerChoice())
playRound(getHumanChoice(), getComputerChoice())

if (humanScore > computerScore) {
    console.log("Human wins!")
} else {
    console.log("Computer wins!")
}