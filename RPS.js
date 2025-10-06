function getComputerChoice() {
    const randomValue = Math.random
    return randomValue < 0.33 ? "rock"
    : randomValue < 0.66 ? "paper"
    : "scissors"
}

function getHumanChoice(choice) {
    switch (choice) {
        case "rock": return "rock"
        case "paper": return "paper"
        case "scissors": return "scissors"
        default: return alert("How did you do this") // Should not happen
    }
}

function playRound(humanChoice, computerChoice) {
    console.log(`Human threw ${humanChoice}, computer threw ${computerChoice}`)
    if (humanChoice === computerChoice) {
        console.log("No change!")
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
   
   
    const hScore = document.querySelector("#hScore");
    const rScore = document.querySelector("#rScore");
    
    hScore.textContent = (`Human: ${humanScore}`)
    rScore.textContent= (`Robot: ${computerScore}`)


    if (humanScore > computerScore && humanScore > 4 ) {
        console.log("Human wins!")
    } else if (computerScore > 4) {
        console.log("Computer wins!")
    }
}

let humanScore = 0
let computerScore = 0 

const choices = document.querySelectorAll("button");

choices.forEach((choice) => { 
    choice.addEventListener("click", () => {
        if (humanScore < 5 && computerScore < 5){
            playRound(getHumanChoice(choice.id), getComputerChoice())
        }
    });   
})




