//Get player's choice and store it in playerSelection variable

function getPlayerChoice(){
    return prompt("Your choice?", "").toUpperCase();
}


//Write a function getComputerChoice() to get computer's choice and store it in computerSelection variable



function getComputerChoice () {
    const randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0){
        return "ROCK";
    } else if (randomNum === 1){
        return "PAPER";
    } else {
        return "SCISSORS"
    }
};




//Write a function playRound() which plays single round of rock-paper-scissors that takes two parameters playerSelection and computerSelection and returns winner of the round with some string

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "TIE";
    } else if ((playerSelection === "ROCK" && computerSelection === "SCISSORS")||(playerSelection==="PAPER" && computerSelection==="ROCK")||(playerSelection==="SCISSORS" && computerSelection==="PAPER")){
        return `You won!! ${playerSelection} beats ${computerSelection}.`
    } else if ((playerSelection === "ROCK" && computerSelection === "PAPER")||(playerSelection==="PAPER" && computerSelection==="SCISSORS")||(playerSelection==="SCISSORS" && computerSelection==="ROCK")){
        return `You lost!! ${computerSelection} beats ${playerSelection}`
    } else{
        return "Invalid input."
    }
}


//Write a function game() using previous function that plays 5 rounds and displays the results with some strigs

function game() {
    let playerPoint = 0;
    let computerPoint = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();     
        playRound(playerSelection, computerSelection);
        let roundResult = playRound(playerSelection, computerSelection);
       
        console.log(`Computer selected ${computerSelection}`);
        console.log(playRound(playerSelection, computerSelection));
       
        if (roundResult.substring(0,7) ==="You won" ) {
            playerPoint += 1;
        } else if (roundResult.substring(0,7) === "You los") {
            computerPoint += 1;
        }
       
        console.log(`Your Score- ${playerPoint} and Computer's Score- ${computerPoint}`);
    }
    if (playerPoint>computerPoint) {
       return console.log(`You won!! you scored ${playerPoint} Points and computer scored ${computerPoint} Points.`);
    } else if (playerPoint<computerPoint){
       return console.log(`You lost!! computer scored ${computerPoint} Points and you scored ${playerPoint} Points.`)
    } else {
        return console.log(`Its a Tie you both scored ${playerPoint} Points.`)
    }
}

game();
