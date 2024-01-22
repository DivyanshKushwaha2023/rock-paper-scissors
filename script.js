//Get player's choice and store it in playerSelection variable
const playerSelection = prompt("Your choice?", "");

//Write a function getComputerChoice() to get computer's choice and store it in computerSelection variable
const randomNum = Math.floor(Math.random() * 3);

function getComputerChoice () {
    if (randomNum === 0){
        return "ROCK";
    } else if (randomNum === 1){
        return "PAPER";
    } else {
        return "SCISSORS"
    }
};

const computerSelection = getComputerChoice();

console.log(computerSelection);

//Write a function playRound() which plays single round of rock-paper-scissors that takes two parameters playerSelection and computerSelection and returns winner of the round with some string

//Make playerSelection case insensetive and account for ties by replaying more rounds

//Write a function game() using previous function as its parameter that plays 5 rounds and displays the results with some strigs