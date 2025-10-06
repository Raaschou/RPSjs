function getRobotChoice() {
    const randomValue = Math.random()
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

function updateScore() {
    const hScore = document.querySelector("#hScore");
    const rScore = document.querySelector("#rScore");
    
    hScore.textContent = (`Human: ${humanScore}`)
    rScore.textContent = (`Robot: ${robotScore}`)
}

function updateEmoji(humanChoice, robotChoice) {
    const hChoiceEmoji = document.querySelector("#hChoice")
    const rChoiceEmoji = document.querySelector("#rChoice")
    let hEmoji = ""
    let rEmoji = ""
    switch (humanChoice) {
        case "rock": 
            hEmoji = "✊" 
            break;
        case "paper": 
            hEmoji = "✋"
            break;
        case "scissors": 
            hEmoji = "✌️"
            break;
    }

    switch (robotChoice) {
        case "rock": 
            rEmoji = "✊"
            break;
        case "paper": 
            rEmoji = "✋"
            break;
        case "scissors": 
            rEmoji = "✌️"
            break;
    }

    hChoiceEmoji.textContent = (hEmoji)
    rChoiceEmoji.textContent = (rEmoji)
}

function playRound(humanChoice, robotChoice) {
    if ((humanChoice === "rock" && robotChoice === "scissors") ||
    (humanChoice === "paper" && robotChoice === "rock") ||
    (humanChoice === "scissors" && robotChoice === "paper")) {
        humanScore++
    } else if (!(humanChoice === robotChoice)) {
        robotScore++
    }
 
    updateScore()
    updateEmoji(humanChoice, robotChoice)


    if (humanScore > robotScore && humanScore > 4 ) {
        const hScore = document.querySelector("#hScore");
        hScore.textContent = (`Human wins!`)
    } else if (robotScore > 4) {
        const rScore = document.querySelector("#rScore");
        rScore.textContent = (`Robot wins!`)
    }
}

let humanScore = 0
let robotScore = 0 

const choices = document.querySelectorAll("button");

choices.forEach((choice) => { 
    choice.addEventListener("click", () => {
        if (humanScore < 5 && robotScore < 5){
            playRound(getHumanChoice(choice.id), getRobotChoice())
        }
    });   
})




