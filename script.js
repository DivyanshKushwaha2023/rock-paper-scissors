//Get player's choice and store it in playerSelection variable
let playerSelection = prompt("Your choice?", "").toUpperCase();

console.log(playerSelection);
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

let computerSelection = getComputerChoice();

console.log(computerSelection);

//Write a function playRound() which plays single round of rock-paper-scissors that takes two parameters playerSelection and computerSelection and returns winner of the round with some string

function playRound(){
    if (playerSelection === computerSelection){
        return "TIE";
    } else if ((playerSelection === "ROCK" && computerSelection === "SCISSORS")||(playerSelection==="PAPER" && computerSelection==="ROCK")||(playerSelection==="SCISSORS" && computerSelection==="PAPER")){
        return `You win!! ${playerSelection} beats ${computerSelection}.`
    } else if ((playerSelection === "ROCK" && computerSelection === "PAPER")||(playerSelection==="PAPER" && computerSelection==="SCISSORS")||(playerSelection==="SCISSORS" && computerSelection==="ROCK")){
        return `You lose!! ${computerSelection} beats ${playerSelection}`
    } else{
        return "Invalid input."
    }

}

console.log(playRound());

//Write a function game() using previous function as its parameter that plays 5 rounds and displays the results with some strigs