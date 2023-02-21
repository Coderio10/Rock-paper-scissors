// Defining Rock, Paper, Scissors as an object
const handOptions = {
    "rock": "./assets/Rock.png",
    "paper": "./assets/Paper.png",
    "scissors": "./assets/Scissors.png"
}

// Defining Score
let SCORE = 0;

// Function that shows the choice of the player on the contest section
const pickUserHand = (playerChoice) => {

    // Hide Hands 
    let hands = document.querySelector(".hands")
    hands.style.display = "none"

    // Hide Contest
    let contest = document.querySelector(".contest")
    contest.style.display = "flex"

    // set user Image
    document.getElementById("playerChoiceImg").src = handOptions[playerChoice]

    computerChoice(playerChoice)

}
// Function that shows the choice of the computer on the contest section
const computerChoice = (playerChoice) => {
    // randomly select an element from an array 
    let hands = ['rock', 'paper', 'scissors']
    let randomHand = hands[Math.floor(Math.random() * hands.length)]

    // set computer image
    document.getElementById("computerChoiceImg").src = handOptions[randomHand]

    referee(playerChoice, randomHand)
}

// Function that serves as a referee
const referee = (playerChoice, randomHand) => {
    if (playerChoice == "paper" && randomHand == "scissors") {
        setDecision("YOU LOSE!")
        setScore(SCORE - 1)
    }
    if (playerChoice == "paper" && randomHand == "rock") {
    setDecision("YOU WIN!")
    setScore(SCORE + 1)
    }
    if (playerChoice == "paper" && randomHand == "paper") {
    setDecision("It's a tie!")
    }
    if (playerChoice == "rock" && randomHand == "scissors") {
    setDecision("YOU WIN!")
    setScore(SCORE + 1)
    }
    if (playerChoice == "rock" && randomHand == "paper") {
    setDecision("YOU LOSE!")
    setScore(SCORE - 1)
    }
    if (playerChoice == "rock" && randomHand == "rock") {
    setDecision("It's a tie!")
    }
    if (playerChoice == "scissors" && randomHand == "scissors") {
    setDecision("It's a tie!")
    }
    if (playerChoice == "scissors" && randomHand == "rock") {
    setDecision("YOU LOSE!")
    setScore(SCORE - 1)
    }
    if (playerChoice == "scissors" && randomHand == "paper") {
    setDecision("YOU WIN!")
    setScore(SCORE + 1)
    }
}

// Fuction to restart Game
const restartGame = () => {
    // hide contest
    let contest = document.querySelector(".contest")
    contest.style.display = "none"

    // show hands
    let hands = document.querySelector(".hands");
    hands.style.display = "flex"
}

// Fuction to update the DOM (loss, win, draw)
const setDecision = (decision) => {
    document.querySelector(".result h1").innerText = decision
    document.querySelector(".mobile-ref .result h1").innerText = decision
}

// Function to set the score
const setScore = (newScore) => {
    SCORE = newScore
    document.querySelector(".score h1").innerText = newScore
}

// function to open popup when rules button is clicked
function openPopup() {
    const popupBtn = document.getElementById('popupBtn')
    popupBtn.onclick = () => {
        document.getElementById("popup").style.display = "flex"
    }
} 
openPopup()

// function to cancel the popup
function closePopup() {
    const closeBtn = document.getElementById('close')
    const closeBtnMob = document.getElementById('close-mobile')
    closeBtn.onclick = () => {
        document.getElementById("popup").style.display = "none"
    }
    closeBtnMob.onclick = () => {
        document.getElementById("popup").style.display = "none"
    }
}
closePopup()
